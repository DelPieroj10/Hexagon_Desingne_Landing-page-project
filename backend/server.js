import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import contactRouter from "./routes/contactRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
app.use(cookieParser());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://hexagon-design-landing-page-project.vercel.app/"
  ],
  credentials: true,
}));

app.use(express.json());

app.use("/", contactRouter);

app.use("/", adminRouter);

app.get("/", (req, res) => {
  res.send("Hello from the backend! Api is running 🏎");
});

app.get("/test", (req, res) => {
  res.send("test ok");
});

app.listen(3001, () => {
  console.log("Server running on port 3001 🚀");
});
