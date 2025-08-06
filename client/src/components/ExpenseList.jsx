import '../styles/ExpenseList.css';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';

function ExpenseList({ expenses, onDelete }) {
  const handleDelete = async (id) => {
  const token = localStorage.getItem('token');
  try {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    onDelete();
  } catch (err) {
    console.error('Delete error:', err);
  }
};

  return (
    <div className="expense-list-container">
      <h2>All Expenses</h2>
      {expenses.map((exp) => (
        <div key={exp._id} className="expense-item">
          <div className="expense-details">
            <div className="expense-title">{exp.title}</div>
            <div className="expense-meta">
              ₹{exp.amount} | {exp.category} |{' '}
              <span className="expense-date">
                {new Date(exp.date).toLocaleDateString()}
              </span>
            </div>
          </div>
          <button
            className="delete-btn"
            onClick={() => handleDelete(exp._id)}
            title="Delete"
          >
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
