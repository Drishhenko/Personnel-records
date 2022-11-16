import Employee from '../models/employee.js'

export const createEmployee = async (name, surname, position, departmentId) => {

    const employee = await Employee.create({
		name,
		surname,
		position,
		departmentId,
	})
	return employee
}

export const getAllEmployees = async () => {
	const employees = await Employee.findAll()
	return employees
}

export const getEmployeeById = async (id) => {
	const employee = await Employee.findOne({ where: { id } })
	return employee
}

export const deleteEmployeeById = async (id) => {
	const employee = await Employee.destroy({ where: { id } })
}
