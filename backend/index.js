const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://naishad:lumy@lumy.9wroa.mongodb.net/EmployeeLogin?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const employeeSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
});

const Employee = mongoose.model('Employee', employeeSchema);
app.use(express.json());
app.use(cors());

app.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
