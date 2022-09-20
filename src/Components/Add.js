import  React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import {useNavigate} from 'react-router-dom'


function Add() {
    const[name, setName] = useState("");
    const[age , setAge] = useState("");
    const[address , setAddress] = useState("");
    const[phoneno , setPhoneNo] = useState("");

    let history = useNavigate ();

    const  handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
         let uniqueId = ids.slice(0,8);

        let a = name,
        b = age,
        c = address,
        d = phoneno;


        Employees.push({id : uniqueId ,Name : a, Age : b, Address : c, PhoneNo : d});

        history("/");
    }
    return(
     <div>
       <Form className="d-gird gap-2" style={{margin:"15rem"}}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control type ="text" placeholder="Enter Name" required onChange={(e) =>setName(e.target.value)}>
           </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control type ="text" placeholder="Enter Age" required onChange={(e) =>setAge(e.target.value)}>
           </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Control type ="text" placeholder="Enter Address" required onChange={(e) =>setAddress(e.target.value)}>
           </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhoneNo">
          <Form.Control type ="text" placeholder="Enter PhoneNo" required onChange={(e) =>setPhoneNo(e.target.value)}>
           </Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
       </Form>
     </div>
    )
}

export default Add