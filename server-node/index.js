import express from "express";

const app = express();
app.use(express.json());

const tasks = [
  {
    id: 1,
    title: "Write project proposal here",
    completed: false,
    createdAt: "2026-09-28T10:00:00.000Z",
  },
];

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API is running on the http://localhost:${PORT}`);
});
