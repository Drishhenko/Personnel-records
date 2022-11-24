import ApiError from '../apiError.js'
import {
	getAllEmployees,
	getEmployeeById,
	createEmployee,
	deleteEmployeeById,
	getHeadOfDepartment,
} from '../services/employeeServices.js'

class EmployeeController {
	async create(req, res, next) {
		const { name, surname, position, departmentId } = req.body

		if (position === 'Head of department') {
			const headOfDepartment = await getHeadOfDepartment (
				departmentId,
				position
			)
			if (headOfDepartment) {
				return res.status(400).send('There can be only one head of department.')
			}
		}

		try {
			const employee = await createEmployee (
				name,
				surname,
				position,
				departmentId
			)
			res.json(employee)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async getAll(req, res, next) {
		const { sort, searchValue } = req.params
		try {
			const employees = await getAllEmployees( sort, searchValue)
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
			await deleteEmployeeById(id)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}
}

export default new EmployeeController()
