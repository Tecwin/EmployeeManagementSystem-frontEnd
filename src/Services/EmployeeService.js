import axios from "axios";

const getAllEmployeesURL='http://localhost:8080/employee/getAll';
const saveEmployeeURL='http://localhost:8080/employee/save';
const getEmployeeURL='http://localhost:8080/employee/getEmployee'
const updateEmployeeURL='http://localhost:8080/employee/updateEmployee';
const deleteEmployeeURL='http://localhost:8080/employee/delete';


export const getAllEmployee=()=> {
  return axios.get(getAllEmployeesURL);
}




export const addEmployee = (employee) => {  
    return axios.post(saveEmployeeURL,employee)
}

export const getEmployee=(id)=>{
  return axios.get(getEmployeeURL+'/'+id);
}

export const deleteEmployee=(id)=>{
  console.log(id);
  return axios.delete(deleteEmployeeURL+'/'+id);
}
export const updateEmployee=(employee,id)=>{
  return axios.put(updateEmployeeURL+'/'+id,employee);
}

