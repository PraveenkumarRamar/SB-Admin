import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'

function Profile() {
    let nav = useNavigate()
    return<>
    <div>
    <h1>Profile</h1>
    <h3>The subsequences are</h3>
    <ul>
        <li  onClick={()=>nav('details')}>Profile-details</li>
        <Link to='reset-pass' ><li>Reset-password</li></Link>
        
    </ul>
    <Outlet/>
    </div>
    </>

}

export default Profile