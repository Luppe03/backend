const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const messageRoutes = require('./routes/messageRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Suppress Mongoose strictQuery warning
mongoose.set('strictQuery', true);

// Anslut till MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });

// Routes
app.use('/api/products', productRoutes);
app.use('/api/messages', messageRoutes);

// Starta servern
const PORT = 5002;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
