import sequelize from '../database.js'
import { DataTypes } from 'sequelize'
import  Employee  from './employee.js'

const Department = sequelize.define('department', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, unique: true  },
	description: { type: DataTypes.STRING },
})

Department.hasMany(Employee, {as: 'stuff'})
Employee.belongsTo(Department)

export default Department
