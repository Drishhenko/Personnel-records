const Router = require('express')
const departmentController = require('./controllers/departmentController')
const employeeController = require('./controllers/employeeController')
const { validationEmployee, validatorDepartment } = require('./services/validators')

const employeeRouter = new Router()
console.log({ employeeRouter })

employeeRouter.post('/', validationEmployee, employeeController.create)
employeeRouter.get('/:id', employeeController.getOne)
employeeRouter.get('/', employeeController.getAll)

employeeRouter.delete('/:id', employeeController.delete)

const departmentRouter = new Router()

departmentRouter.post('/', validatorDepartment, departmentController.create)
departmentRouter.get('/', departmentController.getAll)
departmentRouter.get('/:id', departmentController.getOne)
departmentRouter.delete('/:id', departmentController.delete)

const mainRouter = new Router()

mainRouter.use('/employee', employeeRouter)
mainRouter.use('/department', departmentRouter)

module.exports = mainRouter
