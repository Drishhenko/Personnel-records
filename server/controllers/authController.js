const jwt = require('jsonwebtoken')
const ApiError = require('../apiError')
const { Admin } = require('../models')

const generateJwt = (login, password) => {
	return jwt.sign({ login, password }, process.env.SECRET_KEY, {
		expiresIn: '24h',
	})
}

class AuthController {
	async create(req, res) {
		const { login, password } = req.body
		const admin = await Admin.create({ login, password })
		return res.json(admin)
	}

	async signIn(req, res, next) {
		const { login, password } = req.body

		try {
			const admin = await Admin.findOne({ where: { login } })
			if (!admin) {
				return next(ApiError.internalServerError('invalid login'))
			}
			if (!password === admin.password) {
				return next(ApiError.internal('invalid password'))
			}
			const token = generateJwt(admin.login, admin.password)
			return res.json({ token })
		} catch (err) {
			return next(ApiError.internalServerError(err.message))
		}
	}
}

module.exports = new AuthController()
