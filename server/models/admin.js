import sequelize from '../database.js'
import { DataTypes } from 'sequelize'


const Admin = sequelize.define('admin', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
	login: { type: DataTypes.STRING, unique: true, allowNull: false },
	password: {type: DataTypes.STRING, allowNull: false}
})



export default Admin 