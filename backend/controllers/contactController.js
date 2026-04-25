import nodemailer from "nodemailer";
import supabase from "../config/supabase.js";

export const sendController = async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const { data, error } = await supabase
      .from("contact_email")
      .insert([{ name, email, message }]);

    console.log("SUPABASE DATA:", data);
    console.log("SUPABASE ERROR:", error);

    if (error) {
      console.error("Error inserting into Supabase:", error);
      return res
        .status(500)
        .json({ message: "Error saving message to database ❌" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New message from contact form",
      text: `You have received a new message from: \nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me!",
      text: `Hello ${name},\n\nThank you for contacting me. I will get back to you soon!\n\nBest regards,\nJean Piero`,
    });

    res.json({ message: "Message received successfully ✔" });
  
  } catch (e) {
    console.error("FULL ERROR:", e);
    res.status(500).json({ message: e.message + "❌" });
  }
};
