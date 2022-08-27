const { Employee } = require('../models')
const ApiError = require('../apiError')

class EmployeeController {
	async create(req, res, next) {
		let { name, surname, position, departmentId } = req.body
		if (!name || !surname || !position || !departmentId) {
			return next(ApiError.badRequest('incorrect data'))
		}
		try {
			const employee = await Employee.create({
				name,
				surname,
				position,
				departmentId,
			})
			return res.json(employee)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async getAll(req, res) {
		try {
			const employees = await Employee.findAll()
			return res.json(employees)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async getOne(req, res) {
		const { id } = req.params
		try {
			const employee = await Employee.findOne({ where: { id } })
			return res.json(employee)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async delete(req, res) {
		const { id } = req.params
		try {
			const employee = await Employee.destroy({ where: { id } })
			return res.json(employee)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}
}

module.exports = new EmployeeController()
