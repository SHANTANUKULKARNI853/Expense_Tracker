const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Same secretkey is used when signing
    req.user = decoded; 
    next();
  } catch (err) {
    console.log('Token verification failed:', err.message);
    res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = authenticateToken;
