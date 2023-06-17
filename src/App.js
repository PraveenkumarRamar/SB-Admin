import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Adduser from './components/Adduser'
import Profile from './components/Profile'
import PendingRequest from './components/PendingRequest'
import Task from './components/Task'
import Profiledetails from './components/Profiledetails'
import Resetpassword from './components/Resetpassword'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return <>
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/profile' element={<Profile/>}>
            <Route path='details' element={<Profiledetails/>} />
            <Route path='reset-pass' element={<Resetpassword/>} />
          </Route>
          <Route path='/add-user' element={<Adduser/>} />
          <Route path='/pending-req' element={<PendingRequest/>} />
          <Route path='task' element={<Task/>} />
          <Route path='*' element={<Dashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
}

export default App