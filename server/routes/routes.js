import Router from 'express'
import authController from '../controllers/authController.js'
import departmentController from '../controllers/departmentController.js'
import employeeController from '../controllers/employeeController.js'
import departmentValidator from '../validators/departmentValidator.js'
import employeeValidator from '../validators/employeeValidator.js'

const employeeRouter = new Router()
console.log({ employeeRouter })

employeeRouter.post('/', employeeValidator, employeeController.create)
employeeRouter.get('/:id', employeeController.getOne)
employeeRouter.get('/', employeeController.getAll)

employeeRouter.delete('/:id', employeeController.delete)

const departmentRouter = new Router()

departmentRouter.post('/', departmentValidator, departmentController.create)
departmentRouter.get('/all/:sort', departmentController.getAll)
departmentRouter.get('/:id', departmentController.getOne)
departmentRouter.delete('/:id', departmentController.delete)

const authRouter = new Router()

authRouter.post('/', authController.signIn)

const mainRouter = new Router()

mainRouter.use('/employee', employeeRouter)
mainRouter.use('/department', departmentRouter)
mainRouter.use('/auth', authRouter)


export default mainRouter
