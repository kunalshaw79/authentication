import React from "react";
import './component.css'
import { useNavigate } from "react-router-dom"
import { useState} from "react";
 
const Profile =()=>{
  const [data, setData] = useState({age:0, mobile:0, gender:""}) 
  const navigate = useNavigate();
  const onChange = (e)=>{
      setData({...data, [e.target.name]: e.target.value})
      console.log(data);
  }
  const HandleClick=async (e)=>{
      e.preventDefault();
      const ID =localStorage.getItem('token');
      console.log(ID)
      const response = await fetch("http://localhost:5000/api/profiles/addprofile", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'id': ID
            },
            body: JSON.stringify({age:data.age, gender:data.gender, mobile:data.mobile})
        });
        const res_data = await response.json()
        localStorage.setItem('profile',JSON.stringify(res_data));
        navigate(`/home`)
  }

return(
    <>
  
   <div id="box">
    <form>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Gender</label>
    <input className="form-control" type="text" name="gender" onChange={onChange} value={data.gender}/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect2">Age</label>
    <input className="form-control" type="number" name="age" min="10" max="110"  onChange={onChange} value={data.name}/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect2">Mobile no</label>
    <input className="form-control"  onChange={onChange} value={data.mobile} name="mobile" type="number" min="1000000000" max="9999999999" />
  </div>
</form>
<button onClick={HandleClick} className="btn btn-primary my-2 disable">Create profile</button>
    </div>
    </>
)
}
export default Profile