import { $host } from ".";

export const createDepartment = async (department) => {
    const {data} = await $host.post('api/department', department)
    return data
}

export const getDepartments = async () => {
    const {data} = await $host.get('api/department')
    return data
}

export const getOneDepartment = async (id) => {
    const {data} = await $host.get('api/department' + id)
    return data
}

export const deleteDepartment = async (id) => {
    const {data} = await $host.delete('api/department/' + id)
    return data 
}