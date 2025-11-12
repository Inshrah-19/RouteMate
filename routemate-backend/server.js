const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const routeRoutes = require('./routes/routeRoutes');
const busRoutes = require('./routes/busRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/feedback', feedbackRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database synced successfully');
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});