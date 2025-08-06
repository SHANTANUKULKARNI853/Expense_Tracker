const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');
const mongoose = require('mongoose');
const authenticateToken = require('../middleware/authMiddleware');

// GET all expenses for the logged-in user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 }); // 🔁 user instead of userId
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new expense
router.post('/', authenticateToken, async (req, res) => {
  const { title, amount, category, date } = req.body;

  if (!title || !amount || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newExpense = new Expense({
      title,
      amount,
      category,
      date: date || Date.now(),
      user: req.user.id, 
    });

    const saved = await newExpense.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Error saving expense' });
  }
});


router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid expense ID' });
  }

  try {
    const expense = await Expense.findOne({ _id: id, user: req.user.id }); 
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found or unauthorized' });
    }

await Expense.findByIdAndDelete(id);
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Error deleting expense' });
  }
});

module.exports = router;
