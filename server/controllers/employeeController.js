import Employee  from '../models/employee.js'
import ApiError from '../apiError.js'
import {
	getAllEmployees,
	getEmployeeById,
	createEmployee,
	deleteEmployeeById,
} from '../services/employeeServices.js'

class EmployeeController {
	async create(req, res, next) {
		const { name, surname, position, departmentId } = req.body
		if (position === 'Head of department') {
			const headOfDepartment = await Employee.findOne({
				were: { departmentId, position },
			})
	
			if (headOfDepartment) {
				return res.status(400).send('There can be only one head of department.')
			}
		}		
		try {
			const employee = await createEmployee(name, surname, position, departmentId)
			res.json(employee)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async getAll(req, res, next) {
		try {
			const employees = await getAllEmployees()
			res.json(employees)
		} catch (e) {
			return next(ApiError.notFound(e.message))
		}
	}

	async getOne(req, res, next) {
		const { id } = req.params
		try {
			const employee = await getEmployeeById(id)
			res.json(employee)
		} catch (e) {
			return next(ApiError.notFound(e.message))
		}
	}

	async delete(req, res, next) {
		const { id } = req.params
		try {
			await eleteEmployeeById(id)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}
}

export default new EmployeeController()
