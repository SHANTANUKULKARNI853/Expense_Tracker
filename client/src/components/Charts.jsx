import '../styles/Charts.css';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

function Charts({ expenses }) {
  // Pie Chart Data which shows Category-wise Spending 
  const categoryTotals = {};
  expenses.forEach(exp => {
    categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + parseFloat(exp.amount);
  });

  const pieData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#e91e63'],
        borderWidth: 1,
      },
    ],
  };

  // Line Chart Data which shows Spending Over Time
  const dailyTotals = {};

  expenses.forEach(exp => {
    const date = new Date(exp.date).toISOString().split('T')[0];
    dailyTotals[date] = (dailyTotals[date] || 0) + parseFloat(exp.amount);
  });

  const sortedDates = Object.keys(dailyTotals).sort();

  const lineData = {
    labels: sortedDates,
    datasets: [
      {
        label: 'Daily Spending',
        data: sortedDates.map(date => dailyTotals[date]),
        fill: false,
        borderColor: '#673ab7',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="charts-container">
      <div className="chart-box">
        <h3>Spending by Category</h3>
        <Pie data={pieData} />
      </div>
      <div className="chart-box">
        <h3>Spending Over Time</h3>
        <Line data={lineData} />
      </div>
    </div>
  );
}

export default Charts;
