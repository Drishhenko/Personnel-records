import  Department from '../models/departments.js'
import Employee from '../models/employee.js'
import ApiError from '../apiError.js'

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
			const departments = await Department.findAll({
				include: { model: Employee, as: 'stuff' },
			})
			return res.json(departments)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async getOne(req, res) {
		const { id } = req.params
		try {
			const department = await Department.findOne({
				where: { id },
				include: { model: Employee, as: 'stuff' },
			})
			return res.json(department)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async delete(req, res) {
		const { id } = req.params
		try {
			const department = await Department.destroy({ where: { id } })
			return res.json(department)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}
}

export default new DepartmentController()
