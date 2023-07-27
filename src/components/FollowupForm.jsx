import React, { useState } from 'react'
import '../styles/FollowupForm.css'
const FollowupForm = ({onsubmission}) => {
    const [customer,setcustomer]= useState({  name:'',email:'',message:''});
    
    const getdata=(e)=>{
        e.preventDefault();
        if ( !customer.name || !customer.email || !customer.message ) {
            alert('Fill all fields')
            return;
          }
        
        
        // console.log(customer);
        onsubmission(customer);
        e.target.reset();
    }
    const handleChanges=(event)=>{
        const { name, value } = event.target;
        setcustomer(prevuser => ({
          ...prevuser,
          [name]: value
        }));
       
    }

  return (
    <div className='main-container'>
    <div className='form-container'>
        <h2>FOLLOW-UP REMINDER FORM </h2>
        <form  onSubmit={getdata}>
        <div className="form-element">
          <label htmlFor='name'>CUSTOMER NAME</label>
          <input id='name' type="text" name='name' value={customer.name} onChange={handleChanges} />
        </div>
        <div className="form-element">
          <label htmlFor='email'>CUSTOMER EMAIL</label>
          <input id='email' type="email" name='email' value={customer.email} onChange={handleChanges} />
        </div>
        
        <div className="form-element">
          <label htmlFor='message'>MESSAGE</label>
          <input id='message' type="text" name='message' value={customer.message} onChange={handleChanges} />
        </div>
        
        <button className='form-btn' type='submit'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default FollowupForm;