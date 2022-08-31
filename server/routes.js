const Router = require('express')
const authController = require('./controllers/authController')
const departmentController = require('./controllers/departmentController')
const employeeController = require('./controllers/employeeController')
const { employeeValidator, departmentValidator} = require('./services/validators')

const employeeRouter = new Router()
console.log({ employeeRouter })

employeeRouter.post('/', employeeValidator, employeeController.create)
employeeRouter.get('/:id', employeeController.getOne)
employeeRouter.get('/', employeeController.getAll)

employeeRouter.delete('/:id', employeeController.delete)

const departmentRouter = new Router()

departmentRouter.post('/', departmentValidator, departmentController.create)
departmentRouter.get('/', departmentController.getAll)
departmentRouter.get('/:id', departmentController.getOne)
departmentRouter.delete('/:id', departmentController.delete)

const authRouter = new Router()

authRouter.post('/', authController.signIn)

const mainRouter = new Router()

mainRouter.use('/employee', employeeRouter)
mainRouter.use('/department', departmentRouter)
mainRouter.use('/auth', authRouter)


module.exports = mainRouter
