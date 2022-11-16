import Department from "../models/departments.js";
import Employee from "../models/employee.js";

export const getDepartmentById = async (id) => {
  const department = await Department.findOne({
    where: { id },
    include: { model: Employee, as: "stuff" },
  });
  return department;
};

export const getAllDepartments = async () => {
  const departments = await Department.findAll({
    include: { model: Employee, as: "stuff" },
  });
  return departments;
};

export const createDepartment = async (title, description) => {
  const department = await Department.create({ title, description });
  return department;
};

export const deleteDepartment = async (id) => {
  await Department.destroy({ where: { id } });
};
