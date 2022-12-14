import { $host } from '.'

export const createEmployee = async (employee) => {
    const data = await $host.post('api/employee', employee)
    return data
}

export const getEmployees = async (sort, searchValue) => {
  const { data } = await $host.get(`api/employee/all/${sort || 'date'}${searchValue ? `/${searchValue}` : ''}`)
  return data
}

export const getOneEmployee = async (id) => {
  const { data } = await $host.get('api/employee/' + id)
  return data
}

export const deleteEmployee = async (id) => {
  const { data } = await $host.delete('api/employee/' + id)
  return data
}
