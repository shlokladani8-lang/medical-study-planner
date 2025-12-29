import express from "express";
import syllabusRoutes from "./routes/syllabus.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", syllabusRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
