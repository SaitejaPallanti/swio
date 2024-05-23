const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// ...
const transactionRoutes = require('./routes/transactions');

app.use('/api', transactionRoutes);
// ...