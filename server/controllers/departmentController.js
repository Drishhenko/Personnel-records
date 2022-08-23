const { Department } = require('../models')
const ApiError = require('../services/apiError')

class DepartmentController {
	async create(req, res, next) {
		console.log(req.body)
		const { title, description } = req.body

		if (!title) {
			return next(ApiError.badRequest('incorrect data'))
		}
		try {
			const department = await Department.create({ title, description })
			return res.json(department)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async getAll(req, res) {
		try {
			const departments = await Department.findAll()
			return res.json(departments)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async getOne(req, res) {
		const { id } = req.params
		try {
			const department = await Department.findOne({ where: { id } })
			return res.json(department)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async delete(req, res) {
		const { id } = req.body
		try {
			await Department.destroy({ where: { id } })
			return res.json(department)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}
}

module.exports = new DepartmentController()
