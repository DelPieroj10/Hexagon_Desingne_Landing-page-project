import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import contactRouter from "./routes/contactRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "https://hexagon-desingne-landing-page-proje.vercel.app",
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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

app.listen(onRender, () => {
  console.log("Server running on port onRender 🚀");
});
