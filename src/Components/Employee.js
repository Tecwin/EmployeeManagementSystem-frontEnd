import React, { useEffect, useState } from 'react'
import { addEmployee, getEmployee, updateEmployee} from '../Services/EmployeeService';
import { useNavigate,useParams } from 'react-router-dom';

function Employee() {
   const navigate=useNavigate();
   const {id}=useParams();
  
  const[formData,setFormData]=useState({
    firstName:"",lastName:"",email:"",password:"",phoneNo:"",hireDate:"",birthDate:""
  })

  const[errors,setErrors]=useState({firstName:"",lastName:"",email:"",password:"",phoneNo:"",hireDate:"",birthDate:""})
  function handleForm(event){
    const{name,value}=event.target;
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        [name]:value
      }
    })
  }

  useEffect(()=>{
    if(id)
    getEmployee(id).then((response)=>{
  setFormData(test=>{
    return{
      ...response.data
    }
  })
  })

  },[id])

  function saveOrUpdateEmployee(e){
    e.preventDefault();
    if(validateForm()){

      if(id){
        updateEmployee(formData,id).then((response)=>{
          console.log(response.data);
          navigate('/');
        }).catch(error=>{
          console.log(error);
        })
      }
      else{
        addEmployee(formData).then((response)=>{
          console.log(response.data);
          navigate('/')
        })
      }
    }}


  function validateForm(){
    let valid=true;
    const errorsCopy={...errors};
    if(formData.firstName.trim()){
      errorsCopy.firstName='';
      
    }
    else{
      errorsCopy.firstName="First Name is required";
      valid=false;
      
    }
  
    if(formData.lastName.trim()){
      errorsCopy.lastName='';
    }
    else{
      errorsCopy.lastName="Last Name is required";
      valid=false;
    }

    if(formData.email.trim()){
      errorsCopy.email='';
    }
    else{
      errorsCopy.email="Email is required";
      valid=false;
    }

    if(formData.password.trim()){
      errorsCopy.password='';
    }
    else{
      errorsCopy.password="Password is required";
      valid=false;
    }
    if(formData.phoneNo){
      errorsCopy.phoneNo='';
    }
    else{
      errorsCopy.phoneNo="Phone No is required";
      valid=false;
    }
    if(formData.birthDate.trim()){
      errorsCopy.birthDate='';
    }
    else{
      errorsCopy.birthDate="Birth Date is required";
      valid=false;
    }

    if(formData.hireDate.trim()){
      errorsCopy.hireDate='';
    }
    else{
      errorsCopy.hireDate="Hire Date is required";
      valid=false;
    }
    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle(){
    if(id)
      return <h2 className='text-center'>Update Employee</h2>;
    else
      return <h2 className='text-center'>Add Employee</h2>;
  }
  return (
    
    <div className='container'>
      <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group nb-2'>
                <label className='form-label'>First Name :</label>
                <input type="text" onChange={handleForm} name='firstName' value={formData.firstName} 
                className={`form-control ${errors.firstName?'is-invalid':''}`}></input>
                { errors.firstName&&<div className='invalid-feedback'>{errors.firstName}
                </div>}
              </div>
              <div className='form-group nb-2'>
                <label className='form-label'>Last Name :</label>
                <input type="text" onChange={handleForm} name='lastName' value={formData.lastName} 
                className={`form-control ${errors.lastName?'is-invalid':''}`}></input>
                { errors.lastName&&<div className='invalid-feedback'>{errors.lastName}
                </div>}
              </div>
              <div className='form-group nb-2'>
                <label className='form-label'>Email :</label>
                <input type="text" onChange={handleForm} name='email' value={formData.email} 
                className={`form-control ${errors.email?'is-invalid':''}`}></input>
                { errors.email&&<div className='invalid-feedback'>{errors.email}
                </div>}
              </div>
              <div className='form-group nb-2'>
                <label className='form-label'>Password :</label>
                <input type="password" onChange={handleForm} name='password' value={formData.password}
                className={`form-control ${errors.password?'is-invalid':''}`}></input>
                { errors.password&&<div className='invalid-feedback'>{errors.password}
                </div>}
              </div>
              <div className='form-group nb-2'>
                <label className='form-label'>Phone No :</label>
                <input type="text" onChange={handleForm} name='phoneNo' value={formData.phoneNo} 
                className={`form-control ${errors.phoneNo?'is-invalid':''}`}></input>
                { errors.phoneNo&&<div className='invalid-feedback'>{errors.phoneNo}
                </div>}
              </div>
              <div className='form-group nb-2'>
                <label className='form-label'>Birth Date :</label>
                <input type="text" onChange={handleForm} name='birthDate' value={formData.birthDate} 
                className={`form-control ${errors.birthDate?'is-invalid':''}`}></input>
                { errors.birthDate&&<div className='invalid-feedback'>{errors.birthDate}
                </div>}
              </div>
              <div className='form-group nb-2'>
                <label className='form-label'>Hire Date :</label>
                <input type="text" onChange={handleForm} name='hireDate' value={formData.hireDate} 
                className={`form-control ${errors.hireDate?'is-invalid':''}`}></input>
                { errors.hireDate&&<div className='invalid-feedback'>{errors.hireDate}
                </div>}
              </div>
              <br></br>
              <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
            </form>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Employee