import React,{useEffect,useState} from 'react'

import {getAllEmployee,deleteEmployee} from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployee() {

    const [employees,setEmployees]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{  
        console.log("use effect rendered") ;    
        getAllEmployees();
    },[])

function getAllEmployees(){
    getAllEmployee().then((response)=>{
        setEmployees(response.data);
    }).catch(error=>{
        console.log(error);
    })
}
function addNewEmployee(){
    navigate('/employee/save');
}

function updateEmployee(id){
    navigate(`/editEmployee/${id}`);
}

function removeEmployee(id){
    deleteEmployee(id).then((response)=>{
        getAllEmployees();
    }).catch((error)=>{
        console.log(error);
    })
}
  return (
    <div className='container'>
        <h1 className='text-center'>List of Employees</h1>
        <button className='btn btn-primary mt-100 ' onClick={addNewEmployee}>Add Employee</button>
        <br></br><br></br>
        <table className='table table-striped table-bordered table-responsive-xl'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Hire Date</th>
                    <th>Birth Date</th>
                    <th>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee=>
                        <tr key={employee.employeeID}>
                            <td>{employee.employeeID}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phoneNo}</td>
                            <td>{employee.hireDate}</td>
                            <td>{employee.birthDate}</td>
                            <td Style='white-space: nowrap'>
                                <button Style='margin:10px'  className='btn btn-info'onClick={()=>updateEmployee(employee.employeeID)}>Update</button>
                                
                                <button className='btn btn-danger' onClick={()=>removeEmployee(employee.employeeID)}>Delete</button>
                            </td>
                            
                            

                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee