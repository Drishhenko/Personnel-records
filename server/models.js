const sequelize = require('./database')
const {DataTypes} = require('sequelize')

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