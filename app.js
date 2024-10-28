require('dotenv').config();
const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(express.json());
app.use('/api', itemRoutes);
app.use('/api', categoryRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
