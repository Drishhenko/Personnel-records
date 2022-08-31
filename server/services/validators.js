const { check, validationResult } = require('express-validator/check')

exports.validationEmployee = [
	check('name')
		.isLength({ min: 2 })
		.withMessage('must be at least 2 chars long')
		.isAlpha()
		.withMessage('must be only letters'),
	check('surname')
		.isLength({ min: 2 })
		.withMessage('must be at least 2 chars long')
		.isAlpha()
		.withMessage('must be only letters'),
	check('position')
		.exists({ checkFalsy: true })
		.withMessage('must be selected position'),
	check('departmentId')
		.exists({ checkFalsy: true })
		.withMessage('must be selected department'),
	(req, res, next) => {
		const errors = validationResult(req)
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() })
		next()
	},
]

exports.validatorDepartment = [
	check('title').isAlpha().withMessage('must be only letters'),
	check('description').isAlpha().withMessage('must be only letters'),
	(req, res, next) => {
		const errors = validationResult(req)
		if (!errors.isEmpty())
			return res.status(422).json({ errors: errors.array() })
		next()
	},
]
