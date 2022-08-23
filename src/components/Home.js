import React from "react";
import './component.css';
import { useState } from "react";
const Home = () => {
  const profile = JSON.parse(localStorage.getItem('profile'));
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
  <h1>welcome ${res.name}</h1>
  <h2>your age is ${profile.age}</h2>
  <h2>your phone number is ${profile.mobile}</h2>
  <h2>you are ${profile.gender}</h2>`
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