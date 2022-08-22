const Router = require ('express')
const departmentController = require('./controllers/departmentController')
const employeeController = require('./controllers/employeeController')

const employeeRouter = new Router()

employeeRouter.post('/', employeeController.create)
employeeRouter.get('/:id', employeeController.getOne)
// employeeRouter.get('/', employeeController.getAll)
employeeRouter.get('/', (req, res) => {
    res.json({message: 'working'})
})
employeeRouter.delete('/:id', employeeController.delete)

const departmentRouter = new Router()

departmentRouter.post('/', departmentController.create )
departmentRouter.get('/', departmentController.getAll )
departmentRouter.get('/:id', departmentController.getOne )
departmentRouter.delete('/:id', departmentController.delete)

const mainRouter = new Router()

mainRouter.use('/employee', employeeRouter)
mainRouter.use('/department', departmentRouter)

module.exports = mainRouter