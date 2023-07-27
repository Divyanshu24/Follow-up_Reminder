
import { useState } from 'react';
import './App.css';
import FollowupForm from './components/FollowupForm';
import Title from './components/Title';
import ReminderList from './components/ReminderList';


function App() {
  const [customerlist, setcustomerlist] = useState([]);
  const formSubmit=(customer)=>{
    setcustomerlist([...customerlist, customer]);
  }
  return (
    <div className="App">
      <Title/>
      <FollowupForm  onsubmission={formSubmit}/>
      <ReminderList customerlist={customerlist}/>
    </div>
  );
}

export default App;
