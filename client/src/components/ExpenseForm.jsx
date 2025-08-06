import { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    category: 'Food',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.title || !form.amount || !form.category) {
    alert('Please fill in all fields');
    return;
  }

  const token = localStorage.getItem('token'); // Getting the JWT token

  try {
    await axios.post(
      'https://expense-tracker-eu7z.onrender.com/api/expenses',
      {
        ...form,
        amount: Number(form.amount),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attaching the token
        },
      }
    );

    setForm({ title: '', amount: '', category: 'Food', date: '' });
    onAdd();
  } catch (err) {
    console.error('Error adding expense:', err);
  }
};


  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} style={styles.input} />
      <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} style={styles.input} />
      <select name="category" value={form.category} onChange={handleChange} style={styles.input}>
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>
      <input type="date" name="date" value={form.date} onChange={handleChange} style={styles.input} />
      <button type="submit" style={styles.button}>Add Expense</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    minWidth: '150px',
  },
  button: {
    padding: '8px 16px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ExpenseForm;
