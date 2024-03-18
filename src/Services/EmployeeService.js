import axios from "axios";

const getAllEmployeesURL='http://ec2-16-170-148-186.eu-north-1.compute.amazonaws.com/employee/getAll';
const saveEmployeeURL='http://ec2-16-170-148-186.eu-north-1.compute.amazonaws.com/employee/save';
const getEmployeeURL='http://ec2-16-170-148-186.eu-north-1.compute.amazonaws.com/employee/getEmployee';
const updateEmployeeURL='http://ec2-16-170-148-186.eu-north-1.compute.amazonaws.com/employee/updateEmployee';
const deleteEmployeeURL='http://ec2-16-170-148-186.eu-north-1.compute.amazonaws.com/employee/delete';


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

