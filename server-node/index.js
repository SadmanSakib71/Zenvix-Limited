import express from "express";

const app = express();
app.use(express.json());

const express = require("express");
const cors = require("cors");

// Allow requests from your frontend port
app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
