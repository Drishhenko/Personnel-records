const Router = require ('express')

const employeeRouter = new Router()

employeeRouter.post('/', )
employeeRouter.get('/:id',)
employeeRouter.get('/', (req, res) => {
    res.json({message: 'working'})
})
employeeRouter.delete('/', )

const departmentRouter = new Router()

departmentRouter.post('/',  )
departmentRouter.get('/',  )
departmentRouter.get('/:id',  )
departmentRouter.delete('/', )

const mainRouter = new Router()

mainRouter.use('/employee', employeeRouter)
mainRouter.use('/department', departmentRouter)

module.exports = mainRouter