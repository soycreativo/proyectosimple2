const Employee = require('../models/employee')

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.createEmployee = async (req, res) => {
    console.log(red.body);
    res.json('received');
};

employeeCtrl.getEmployee = function () {

}

employeeCtrl.editEmployee = function () {

}


employeeCtrl.deleteEmployee = function () {

}

employeeCtrl.getEmployees = function(){

}

module.exports = employeeCtrl;