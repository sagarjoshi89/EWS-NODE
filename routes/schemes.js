const express = require('express');
const Scheme = require('../models/Scheme');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.json(schemes);
  } catch (err) {
    res.json({ message: 'Server error' });
  }
});


router.post('/', async (req, res) => {
  const { title, description, eligibility, link } = req.body;
  try {
    const scheme = new Scheme({ title, description, eligibility, link });
    await scheme.save();
    res.json({ message: 'Scheme added' });
  } catch (err) {
    res.json({ message: 'Server error' });
  }
});

module.exports = router;
