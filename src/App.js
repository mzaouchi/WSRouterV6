import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavbarUsers from './Components/NavbarUsers';
import Users from './Components/Users';
import { v4 as uuidv4 } from 'uuid';
import User from './Components/User';

function App() {
  const [users,setUsers] = useState([
    {name : 'Mohamed', age : 20, email : 'mohamed@gmail.com', id : uuidv4()},
    {name : 'Mahmoud', age : 27, email : 'mahmoud@gmail.com', id : uuidv4()},
    {name : 'Sofiene', age : 50, email : 'sofiene@gmail.com', id : uuidv4()},
    {name : 'Sahla', age : 28, email : 'sahla@gmail.com', id : uuidv4()}
  ])
  return (
    <div>
        <NavbarUsers/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Users users={users}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/users/:id' element={<User users={users}/>}/>
        </Routes>

    </div>
  );
}

export default App;
