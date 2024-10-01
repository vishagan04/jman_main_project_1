// routes/employeeRoutes.js
const express = require("express");
const { addEmployee , getEmployees } = require("../controllers/employeeController");
const router = express.Router();



// Route to get all employees
router.get("/", getEmployees);

router.post("/", addEmployee);
// Add more routes like GET, PUT, DELETE...

module.exports = router;
