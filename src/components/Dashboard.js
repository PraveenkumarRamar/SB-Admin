import React from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Dashboard({ users, setUsers }) {
    let navigate = useNavigate()
    let data = [{
        title: "Earnings(Monthly)",
        value: "40,000",
        color: "primary",
        symbol: "fa-calendar",
        bool: true
    },
    {
        title: "Earnings(Annual)",
        value: "215,000",
        color: "success",
        symbol: "fa-dollar-sign",
        bool: true
    },
    {
        title: "Tasks",
        value: 50,
        color: "info",
        symbol: "fa-clipboard-list",
        bool: false
    },
    {
        title: "Pending Requests",
        value: 18,
        color: "warning",
        symbol: "fa-comments",
        bool: true
    }]
    // let handleDelete = (i)=>{
    //     let newArr = [...users];
    //     newArr.splice(i,1)
    //     setUsers(newArr)
    // }
    return <>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className="row">
                        {
                            data.map((e, i) => {
                                return <>
                                    <Card key={i}
                                        // title={e.title}
                                        // value={e.value}
                                        // color={e.color}
                                        // symbol={e.symbol}
                                        input={e}
                                    />
                                </>
                            })
                        }
                    </div>
                    <div  className='container-fluid'>
                        <Table striped bordered hover variant='dark'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>mobile</th>
                                    <th>DOB</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((e,i)=>{
                                        return <>
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.mobile}</td>
                                            <td>{e.dob}</td>
                                            
                                            <td>
                                                <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)}>edit</Button>
                                                &nbsp;&nbsp;
                                                <Button variant='danger' onClick={()=>{
                                                        let newArr = [...users];
                                                        newArr.splice(i,1)
                                                        setUsers(newArr)  
                                                }} >delete</Button>
                                            </td>
                                        </tr>
                                        </>
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>



        </div>
    </>
}

export default Dashboard