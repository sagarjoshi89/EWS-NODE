const express = require('express');
const router = express.Router();
const Scheme = require('../models/Scheme');
const auth = require('../middleware/auth'); // JWT middleware

// GET all
router.get('/', async (req, res) => {
  const schemes = await Scheme.find();
  res.json(schemes);
});

// POST new
router.post('/', auth, async (req, res) => {
  const scheme = new Scheme(req.body);
  await scheme.save();
  res.json(scheme);
});

// PUT update
router.put('/:id', auth, async (req, res) => {
  const scheme = await Scheme.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(scheme);
});

// DELETE
router.delete('/:id', auth, async (req, res) => {
  await Scheme.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
