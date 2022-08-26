import React from "react";
import './component.css';
import { useState } from "react";
const Home = () => {
//   const profile = JSON.parse(localStorage.getItem('profile')); no use
  const ID =localStorage.getItem('token');
  const fetchProfile= async()=>{
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'id':ID
      }
  });
  const res = await response.json();
  console.log(res);
  document.getElementById('box').innerHTML =`
  <h1>welcome ${res[0].name}</h1>
  <h2>your email is ${res[0].email}</h2>
  <h2>your age is ${res[1].age}</h2>
  <h2>your phone number is ${res[1].mobile}</h2>
  <h2>you are ${res[1].gender}</h2>`
  }
  fetchProfile()
    return (
        <>
        <div id="box">
        
        
        </div>
        </>
    )
}
export default Home 
