import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/AuthCard.css'; 

function AuthCard({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem('token', res.data.token);
      toast.success('Login successful!');
      onAuthSuccess(); // switching to the main UI of APP
    } catch (err) {
      toast.error('Invalid email or password');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      toast.success('Signup successful! Please login.');
      setIsLogin(true); // Switching to Login Page View
    } catch (err) {
      toast.error('Signup failed. Try a different email.');
    }
  };

  return (
  <div className="auth-container">
    <div className={`auth-card-wrapper ${isLogin ? '' : 'flipped'}`}>
      <div className="auth-card-inner">

        {/* Login Card */}
        <div className="auth-card auth-front">
          <div className="auth-left">
            <h2>Welcome to Expense Tracker 💰</h2>
            <p>💸 Let’s Manage Some Money!</p>
          </div>

          <div className="auth-right">
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account?{' '}
              <span className="flip-link" onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          </div>
        </div>

        {/* Signup Card */}
        <div className="auth-card auth-back">
          <div className="auth-left">
            <h2>🌱 New Here? Let’s Grow Together!</h2>
            <p>Join to manage your expenses better.</p>
          </div>

          <div className="auth-right">
            <h3>Sign Up</h3>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account?{' '}
              <span className="flip-link" onClick={() => setIsLogin(true)}>Login</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

}

export default AuthCard;
