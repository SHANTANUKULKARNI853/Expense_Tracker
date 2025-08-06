import { useEffect, useState } from 'react';
import axios from 'axios';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import Charts from './components/Charts';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AuthCard from './components/AuthCard';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [activePage, setActivePage] = useState('dashboard'); 

  const fetchExpenses = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('https://expense-tracker-eu7z.onrender.com/api/expenses', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExpenses(res.data);
    } catch (err) {
      console.error('Error fetching expenses:', err);
    }
  };

  useEffect(() => {
    if (isLoggedIn && activePage === 'dashboard') {
      fetchExpenses();
    }
  }, [isLoggedIn, activePage]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setActivePage('dashboard'); 
  };

  if (!isLoggedIn) {
    return <AuthCard onAuthSuccess={() => setIsLoggedIn(true)} />;
  }

  
  return (
    <div className="app-layout">
      <Sidebar setSelected={setActivePage} selected={activePage} />
      
      <div className="main-content">
        <Topbar onLogout={handleLogout} />

        {activePage === 'dashboard' && (
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '30px' }}>
              💸 Track Your Expenses
            </h1>
            <ExpenseForm onAdd={fetchExpenses} />
            <ExpenseList expenses={expenses} onDelete={fetchExpenses} />
            <Summary expenses={expenses} />
            <Charts expenses={expenses} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
