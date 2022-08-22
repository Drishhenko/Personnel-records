const { Employee } = require("../index")

class EmployeeController {
    async create(req, res) {
        const {name, surname, position} = req.body
        const employee = await Employee.create({name, surname, position})
        return res.json(employee)
    }

    async getAll(req, res) {
        const employees = await Employee.findAll()
        return res.json(employees)
    }

    async getOne(req, res) {
        const {id} = req.params
        const employee = await Employee.findOne({where: {id}})
        return res.json(employee)
    }

    async delete(req, res) {
        const { id } = req.body
        await Employee.destroy({where: {id}})
        return res.json('deleted'); 
    }


}

module.exports = new EmployeeController