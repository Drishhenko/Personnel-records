import sequelize from '../database.js'
import { DataTypes } from 'sequelize'

const Employee = sequelize.define('employee', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
	surname: { type: DataTypes.STRING },
	position: { type: DataTypes.STRING},
})

export default Employee