const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://joshis:Streebo%4012345678@mern.f5on518.mongodb.net/?retryWrites=true&w=majority&appName=MERN', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/schemes', require('./routes/schemes'));
app.get('/', (req, res) => {
  res.send('Welcome to the WES API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));