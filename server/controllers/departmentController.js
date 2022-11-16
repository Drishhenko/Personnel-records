import ApiError from '../apiError.js'
import {
	getAllDepartments,
	getDepartmentById,
	createDepartment,
	deleteDepartment,
} from '../services/departmentServices.js'

class DepartmentController {
	async create(req, res, next) {
		const { title, description } = req.body
		if (!title) {
			return next(ApiError.badRequest('incorrect data'))
		}
		try {
			const department = await createDepartment(title, description)
			res.json(department)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}

	async getAll(req, res, next) {
		const {sort} = req.params
		try {
			const departments = await getAllDepartments(sort)
			res.json(departments)
		} catch (e) {
			return next(ApiError.notFound(e.message))
		}
	}

	async getOne(req, res, next) {
		const { id } = req.params
		try {
			const department = await getDepartmentById(id)
			res.json(department)
		} catch (e) {
			return next(ApiError.notFound(e.message))
		}
	}

	async delete(req, res, next) {
		const { id } = req.params
		try {
			await deleteDepartment(id)
		} catch (e) {
			return next(ApiError.internalServerError(e.message))
		}
	}
}

export default new DepartmentController()
