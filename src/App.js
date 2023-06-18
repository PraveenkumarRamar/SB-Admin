import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Adduser from "./components/Adduser"
import Profile from './components/Profile'
import Pendingrequest from './components/PendingRequest'
import Task from "./components/Task";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Profiledetails from "./components/Profiledetails";
import Resetpassword from "./components/Resetpassword";
import { useState } from "react";
function App() {
  let [users,setUsers] = useState([
    {
      name:"Anoop",
      email:"anoop@gmail.com",
      mobile:"919100201",
      dob:"1993-01-23"
    },
    {
      name:"Ajith",
      email:"ajith@gmail.com",
      mobile:"8919989291",
      dob:"1998-08-20"
    },
    {
      name:"Ganesh",
      email:"ganesh@gmail.com",
      mobile:"80989019801",
      dob:"2000-12-12"
    },
    {
      name:"Gokul",
      email:"gokul@gmail.com",
      mobile:"782718189",
      dob:"2001-09-09"
    }
  ])
  return <>
  <BrowserRouter>
    <div id="wrapper">
        <Sidebar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
          <Route path="/add-user" element={<Adduser users={users} setUsers={setUsers}/>}/>
          <Route path="/edit-user/:id" element={<Adduser users={users} setUsers={setUsers}/>}/>
          <Route path="/profile" element={<Profile/>}>
              <Route path='details' element={<Profiledetails/>}/>
              <Route path='reset-password' element={<Resetpassword/>}/>
          </Route>
          <Route path="/pending-request" element={<Pendingrequest/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="*" element={<Navigate to='/dashboard'/>}/>
        </Routes>
    </div>
  </BrowserRouter>
  </>
}

export default App;