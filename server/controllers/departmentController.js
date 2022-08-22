const { Department } = require("../index")

class DepartmentController {
    async create(req, res) {
        const {title, description} = req.body
        const department = await Department.create({title, description})
        return res.json(department)
    }

    async getAll(req, res) {
        const departments = await Department.findAll()
        return res.json(departments)
    }

    async getOne(req, res) {
        const {id} = req.params
        const department = await Department.findOne({where: {id}})
        return res.json(department)
    }

    async delete(req, res) {
        const { id } = req.body
        await Department.destroy({where: {id}})
        return res.json('deleted'); 
    }


}

module.exports = new DepartmentController