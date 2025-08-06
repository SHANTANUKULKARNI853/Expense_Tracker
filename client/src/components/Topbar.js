import '../styles/Topbar.css';

function Topbar({ onLogout }) {
  return (
    <div className="topbar">
      <h1 className="topbar-title">Dashboard</h1>
      
      <div className="topbar-right">
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Topbar;
