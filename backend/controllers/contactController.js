// import nodemailer from "nodemailer";
//import { Resend } from "resend";
import * as Brevo from "@getbrevo/brevo";
import supabase from "../config/supabase.js";

const brevoClient = new Brevo.TransactionalEmailsApi();
brevoClient.authentication ["api_key"].api_key = process.env.BREVO_API_KEY;

const sendEmail = async ({ to, toName, from, fromName, subject, text }) => {
  const email = new Brevo.SendSmtpEmail();
  email.sender = { email: from, name: fromName };
  email.to = [{ email: to, name: toName }];
  email.subject = subject;
  email.textContent = text;
  return brevoClient.sendTransacEmail(email);
};

export const sendController = async (req, res) => {
  const { name, email, message } = req.body || {};

  console.log("REQUEST RECEIVED");
  console.log(req.body);

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("SUPABASE INSERT ERROR:", error);
      return res.status(500).json({
        message: "Error saving message to database ❌",
      });
    }
  } catch (e) {
    console.error("FULL ERROR:", e);

    return res.status(500).json({
      message: "Internal server error ❌",
    });
  }

  try {
    await sendEmail({
      to: process.env.EMAIL_USER,
      toName: "Jean Piero",
      from: process.env.EMAIL_USER,
      fromName: "Jean Piero Portfolio",
      //replyTo: email,
      subject: "New message from contact form",
      text: `You have received a new message from: \nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    await sendEmail({
      to: email,
      toName: name,
      from: process.env.EMAIL_USER,
      fromName: "Jean Piero Parra",
      subject: "Thanks for contacting me!",
      text: `Hello ${name},\n\n
          Thank you for contacting me. I will get back to you soon!\n\nBest regards,\nJean Piero`,
    });
    console.log("EMAILS SENT SUCCESSFULLY");

  } catch (emailError) {
    console.error("BREVO EMAIL ERROR:", emailError);

    return res.status(200).json({
      message: "Error sending email ❌",
    });
  }
  return res.status(200).json({
    message: "Message received successfully ✔",
  });
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
