// controllers/employeeController.js
const Employee = require("../models/Employee");

exports.addEmployee = async (req, res) => {
  const { name, role, department, password } = req.body;
  const newEmployee = new Employee({ name, role, department, password });
  
  try {
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all employees
exports.getEmployees = async (req, res) => {
    try {
      const employees = await Employee.find(); // Retrieve all employees from the database
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: "Server error: " + error.message });
    }
  };