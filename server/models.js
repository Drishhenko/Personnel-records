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
	title: { type: DataTypes.STRING, unique: true  },
	description: { type: DataTypes.STRING },
})

const Admin = sequelize.define('admin', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
	login: { type: DataTypes.STRING, unique: true, allowNull: false },
	password: {type: DataTypes.STRING, allowNull: false}
})

Department.hasMany(Employee, {as: 'stuff'})
Employee.belongsTo(Department)

module.exports = { Employee, Department, Admin }
