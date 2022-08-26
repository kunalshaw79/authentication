import React from "react";
import './component.css'
import { useNavigate } from "react-router-dom"
import Alert from "./Alert";
import { useState} from "react";
const Login =()=>{
    const [credentials, setCredentials] = useState({ email: "", password: ""}) 
    const navigate = useNavigate();
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(credentials);
    }
    const HandleClick=async (e)=>{
        e.preventDefault();

        console.log("submit");
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const ID = await response.json()
        if (ID.success){
            // Save the auth token and redirect
            localStorage.setItem('token', ID.id_new);
            console.log(ID.id_new) 
            navigate(`/profile`);
        }
        else{
            alert("Invalid credentials");
        }
    }
    //change to fix another login after authentication
        if(localStorage.getItem('token')){
        return(
            <>
            <center><h1>you are logged in </h1><br />
            <h2>Enjoy my app</h2>
            </center>
            </>
        )
    }
return(
    <>
        <div id="box" className="container">
    <form>
  <div className="form-group">
    <label className="light" for="exampleInputEmail1">Email address</label>
    <input type="email"  onChange={onChange} value={credentials.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={onChange} value={credentials.password} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
  </div>
  <button type="submit" onClick={HandleClick} className="btn btn-primary">Submit</button>
</form>
</div>
    </>
)
}
export default Login
