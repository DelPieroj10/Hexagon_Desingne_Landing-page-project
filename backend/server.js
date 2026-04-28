import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import contactRouter from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", contactRouter);

// app.post("/contact", async (req, res) => {
//   console.log("BODY:", req.body);
// });

app.get("/", (req, res) => {
  res.send("Hello from the backend! Api is running 🏎");
});

app.get("/test", (req, res) => {
  res.send("test ok");
});

app.listen(3001, () => {
  console.log("Server running on port 3001 🚀");
});
