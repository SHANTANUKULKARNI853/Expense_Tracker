import '../styles/Summary.css';

function Summary({ expenses }) {
  const total = expenses.reduce((acc, item) => acc + parseFloat(item.amount), 0);

  const categoryMap = {};
  expenses.forEach(exp => {
    categoryMap[exp.category] = (categoryMap[exp.category] || 0) + parseFloat(exp.amount);
  });

  const topCategory = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b, '');

  return (
    <div className="summary-cards">
      <div className="summary-card total">
        <h3>Total Spent</h3>
        <p>₹{total.toFixed(2)}</p>
      </div>
      <div className="summary-card category">
        <h3>Top Category</h3>
        <p>{topCategory || 'N/A'}</p>
      </div>
      <div className="summary-card count">
        <h3>Total Expenses</h3>
        <p>{expenses.length}</p>
      </div>
    </div>
  );
}

export default Summary;
