import { check, validationResult } from 'express-validator/check/index.js'

const departmentValidator = [
	check('title').isAlpha().withMessage('must be only letters in title'),
	(req, res, next) => {
		const errors = validationResult(req)
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() })
		next()
	},
]

export default departmentValidator
