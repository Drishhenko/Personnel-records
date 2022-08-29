const sequelize = require('./database')
const { DataTypes } = require('sequelize')

const Employee = sequelize.define('employee', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
	surname: { type: DataTypes.STRING },
	position: { type: DataTypes.STRING},
})

const Department = sequelize.define('department', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING },
	description: { type: DataTypes.STRING },
})

Department.hasMany(Employee, {as: 'stuff'})
Employee.belongsTo(Department)

module.exports = { Employee, Department }
