import { $host } from ".";

export const createEmployee = async (employee) => {
    const {data} = await $host.post('api/employee', employee)
    return data
}

export const getEmployees = async () => {
    const {data} = await $host.get('api/employee')
    return data
}

export const getOneEmployee = async (id) => {
    const {data} = await $host.get('api/employee' + id)
    return data
}