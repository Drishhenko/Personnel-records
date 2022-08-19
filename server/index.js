require('dotenv').config()
const express = require('express') 
const {Sequelize} = require('sequelize')
const {DataTypes} = require('sequelize')
const router = require('./routes')

const PORT = process.env.PORT

const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

const Employee = sequelize.define('employee', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    position: {type: DataTypes.STRING, defaultValue: 'USER'}
});

const Department = sequelize.define('department', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    date: {type: DataTypes.DATE},
    description: {type: DataTypes.STRING},
    // users: {type: DataTypes.ARRAY}
});

Department.hasMany(Employee)
Employee.belongsTo(Department)

const app = express()
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {

    }
}

start()


