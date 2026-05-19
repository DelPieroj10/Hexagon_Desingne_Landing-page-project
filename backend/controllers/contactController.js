import nodemailer from "nodemailer";
import supabase from "../config/supabase.js";

export const sendController = async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: "All fields are required" 
    });
  }

  try {
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("SUPABASE INSERT ERROR:", error);

      return res.status(500).json({ 
        message: "Error saving message to database ❌" 
      });
    }
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        family: 4,
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
        text: `Hello ${name},\n\n
          Thank you for contacting me. I will get back to you soon!\n\nBest regards,\nJean Piero`,
      });
    } catch (emailError) {
      console.error("EMAIL ERROR:", emailError);

      return res.json({ 
        message: "Message received successfully ✔" 
      });
    }  
  } catch (e) {
    console.error("FULL ERROR:", e);

    return res.status(500).json({
      message: "Internal server error ❌"
    });
  }
};

export const getContactsController = async (req, res) => {
  try {
    const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

    console.log("SUPABASE GET CONTACTS DATA:", data);
    console.log("SUPABASE GET CONTACTS ERROR:", error);

    if (error) {
      console.error("DB ERROR:", error);
      return res.status(500).json({ message: "Error fetching contacts ❌" });
    }

    res.json(data);
  } catch (e) {
    console.error("SERVER ERROR:", e);
    res.status(500).json({ message: "Error fetching contacts ❌" });
  }
};
