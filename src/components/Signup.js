import React from "react";
import './component.css'
import { useNavigate } from "react-router-dom"
import Alert from "./Alert";
import { useState} from "react";
const Signup =()=>{
    const [credentials, setCredentials] = useState({name:"", email: "", password: "",cnfpass:""}) 
    const navigate = useNavigate();
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(credentials);
    }
    const HandleClick=async (e)=>{
        e.preventDefault();
        if(credentials.password !== credentials.cnfpass){
            alert('password mismatch')
            return(<Alert message="password mismatch"/>)
           
        }
        else{
        console.log("submit");
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
        });
        const ID = await response.json()
        console.log(ID);
        if (ID.success){
            // Save the auth token and redirect
            localStorage.setItem('token', ID.id_new); 
            navigate(`/profile`);
        }
        else{
            alert("Internal server error");
        }
    }
    }
return(
    <>
    <div id="box" className="container">
    <form>
  <div className="form-group">
  <label for="kunal">Name</label>
  <input type="text" onChange={onChange} value={credentials.name} name="name" className="form-control" />
    <label className="light" for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={onChange} value={credentials.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={onChange} value={credentials.password} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" onChange={onChange} value={credentials.cnfpass} name="cnfpass" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
  </div>
  <button onClick={HandleClick} className="btn btn-primary">Submit</button>
</form>
</div>
    </>
)
}
export default Signup