const express = require("express");
const Event = require("../models/Event");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "username");
    res.json(events);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  const { name, description, date } = req.body;
  const event = new Event({ name, description, date });
  try {
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
