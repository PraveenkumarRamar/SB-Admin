import React, { useState, useEffect,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { userCont } from '../context/UserContextComponent';

function AddUser() {
    let usersContext = useContext(userCont)

    let navigate = useNavigate()
    let params = useParams()


    let [name, setName] = useState("") // setName is a state function for edit the value
    let [email, setEmail] = useState("")
    let [mobile, setMobile] = useState("")
    let [dob, setDob] = useState("")

    let handleSubmit = () => {
        let newUser = { name, email, mobile, dob }
        let newArray = [...usersContext.users]
        // newArray.push(newUser)
        // setUsers(newArray)
        if(params.id!==undefined){
            newArray.splice(params.id,1,newUser)
        }else{
            newArray.push(newUser)
        }
        usersContext.setUsers(newArray)
        navigate('/dashboard')
    }


    // useEffect(() => {
    //     console.log("Use Effect Triggered")
    // })//Triggered when a state changes

    // useEffect(()=>{
    //   console.log("Use Effect Triggered")
    // },[])//Triggered only for the first time when the component is loading

    // useEffect(()=>{
    //   console.log("Use Effect Triggered")
    // },[email,dob]) //Triggered when the mentioned state changes

        useEffect(()=>{
            if(params.id !== undefined){
                setName(usersContext.users[params.id].name)
                setEmail(usersContext.users[params.id].email)
                setMobile(usersContext.users[params.id].mobile)
                setDob(usersContext.users[params.id].dob)
            }
        },[params.id,usersContext.users])

    return <>
        <div className='container-fluid'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Form>
        </div>
    </>
}

export default AddUser