import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Adduser from "./components/Adduser"
import Profile from './components/Profile'
import Pendingrequest from './components/PendingRequest'
import Task from "./components/Task";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profiledetails from "./components/Profiledetails";
import Resetpassword from "./components/Resetpassword";
import UserContextComponent from "./context/UserContextComponent";
import DashBoardComponents from "./context/DashBoardComponents";

function App() {

  return <>

    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={
            <DashBoardComponents>
              <UserContextComponent>
                <Dashboard />
              </UserContextComponent>
            </DashBoardComponents>} />
          <Route path="/add-user" element={
            <UserContextComponent>
              <Adduser />
            </UserContextComponent>
          } />
          <Route path="/edit-user/:id" element={
            <UserContextComponent>
              <Adduser />
            </UserContextComponent>
          } />
          <Route path="/profile" element={<Profile />}>
            <Route path='details' element={<Profiledetails />} />
            <Route path='reset-password' element={<Resetpassword />} />
          </Route>
          <Route path="/pending-request" element={<Pendingrequest />} />
          <Route path="/task" element={<Task />} />
          <Route path="*" element={<Navigate to='/dashboard' />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
}

export default App;