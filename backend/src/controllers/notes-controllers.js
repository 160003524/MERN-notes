const notesCtrl = {};

const Note = require('../models/note');

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCtrl.createNotes = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author,
  });
  await newNote.save();
  res.json({ msg: 'Note saved' });
};

notesCtrl.getNote = async (req, res) => {
  const { id } = req.params;
  const notes = await Note.findById(id);
  res.json(notes);
};

notesCtrl.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  await Note.findOneAndUpdate(id, {
    title,
    content,
    author,
  });

  res.json('Nota actualizada');
};

notesCtrl.deleteNote = async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.json('Nota eliminada');
};
module.exports = notesCtrl;
