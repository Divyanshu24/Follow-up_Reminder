import React, { useState } from 'react'
import '../styles/ListElement.css'
const ListElement = ({ object,onSelect, id}) => {
    const [send, setsend]=useState('SEND');
    const [btncolor,setbtncolor]=useState("#4285F4");
  return (
    <div className='list-element'>
        <li><span className='list-text'>{object.name}</span><span className='list-text'>{object.email} </span> <span className='list-text'>{object.message}</span> <span><button className='list-btn' style={{backgroundColor:btncolor}}  onClick={()=>{
            setbtncolor("#009933")
            setsend('SENT✅');
            onSelect(object)}}>{send}</button></span></li>
        
        
    </div>
  )
}

export default ListElement