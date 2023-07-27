import React from 'react'
import ListElement from './ListElement';
import '../styles/ReminderList.css'
const ReminderList = ({customerlist}) => {

    const sendtoid=async (customer)=>{
       
       console.log(`message - ${customer.message} succesfully sent to email -${customer.email}`)
    }
   
  return (
    <div className="reminder-container">
        <h2>Reminder List</h2>
        <ul>
            {customerlist.map((customer,index)=>{
                 return <ListElement key={index} id={index} object={customer} onSelect={sendtoid}   />
                })}
        </ul>
    </div>
  )
}

export default ReminderList