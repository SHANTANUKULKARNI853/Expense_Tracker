import '../styles/Sidebar.css';
import { FaChartPie, FaCog } from 'react-icons/fa';

function Sidebar({ setSelected, selected }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">💰Tracker</h2>
      <ul className="sidebar-menu">
        <li
          className={selected === 'dashboard' ? 'active' : ''}
          onClick={() => setSelected('dashboard')}
        >
          <FaChartPie /> Dashboard
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
