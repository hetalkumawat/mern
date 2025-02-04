const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    // res.json(notes);
    res.send(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// router.get('/', async (req, res) => {
//   res.send("hello");
// });

// Create a new note
router.post('/', async (req, res) => {
  const note = new Note({
    content: req.body.content,
  });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
