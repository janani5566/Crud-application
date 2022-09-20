import React,{useState,useEffect} from 'react'
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employees'
import {useNavigate } from 'react-router-dom'


function Edit() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address,setAddress] = useState("");
    const [PhoneNo,setPhoneNo] = useState("");
    const [id, setId] = useState("");


    let history =useNavigate();


    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);


    const handleSubmit =(e) => {
        e.preventDefault();


        let a = Employees[index];
        a.Name = name;
        a.Age =age;
        a.Address =address;
        a.PhoneNo =PhoneNo;


        history("/");
    }


     useEffect(() =>{
       setName(localStorage.getItem('Name'))
       setAge(localStorage.getItem('Age'))
       setAge(localStorage.getItem('Address'))
       setAge(localStorage.getItem('PhoneNo'))
       setId(localStorage.getItem('Id'))
     },[])



    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
    <Form.Group className="mb-3" controlId='formName'>
        <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
        </Form.Control>
    </Form.Group>


    <Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
        </Form.Control>
    </Form.Group>


    <Form.Group className="mb-3" controlId="formAddress">
        <Form.Control type="text" placeholder="Enter Address" value={address} required onChange={(e) => setAddress(e.target.value)}>
        </Form.Control>
    </Form.Group>


    <Form.Group className="mb-3" controlId="formPhoneNo">
        <Form.Control type="text" placeholder="Enter PhoneNo" value={PhoneNo} required onChange={(e) => setPhoneNo(e.target.value)}>
        </Form.Control>
    </Form.Group>


    <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
    </Form>
        </div>
    )


}


export default Edit;