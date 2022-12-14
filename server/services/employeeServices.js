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

export const getAllEmployees = async (sort, searchValue) => {
	const employees = await Employee.findAll()

	if (sort === 'last5') {
		return employees
			.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
			.slice(0, 5)
	}

	if (searchValue) {
		searchValue.toLowerCase()
		return employees.filter(
			(item) =>
				item.dataValues.name.toLowerCase().includes(searchValue) ||
				item.dataValues.surname.toLowerCase().includes(searchValue)
		)
	}

	return employees.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export const getEmployeeById = async (id) => {
	const employee = await Employee.findOne({ where: { id } })
	return employee
}

export const getHeadOfDepartment = async (departmentId, position) => {
	console.log('departmentId', departmentId)
	const headOfDepartment = await Employee.findOne({
		where: { departmentId, position },
	})
	console.log('headOfDepartment', headOfDepartment)
	return headOfDepartment
}

export const deleteEmployeeById = async (id) => {
	const employee = await Employee.destroy({ where: { id } })
}
