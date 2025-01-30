import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2600;

app.use(cors());
app.use(express.json());

// Define API Route
app.get("/", (req, res) => {
  res.json({
    "email":process.env.EMAIL,
    "current_datetime": new Date().toISOString(),
    "github_url":process.env.GITHUB_URL,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
