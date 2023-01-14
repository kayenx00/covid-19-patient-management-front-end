import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../api/GeneralAPI';
function AddDoctor() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [work_place, setWork_place] = useState("")
    const token = localStorage.getItem('token')
    const onSubmit = async () => {
        let s = API + 'addDoctor'
        // let data = JSON.stringify({
        //     "username": username,
        //     "email": email,
        //     "password": password,
        //     "phone": phone,
        //     "name": name,
        //     "work_place": work_place
        //   });
        const formData = new FormData();
        formData.append("username", username)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("phone", phone)
        formData.append("name", name)
        formData.append("work_place", work_place)
        const config = {
          method: 'post',
          url: s,
          headers: { 
            // 'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`

          },
          data : formData
        };
        axios(config).then(function (response) {
            alert("Add successfully")
          console.log(JSON.stringify(response.data));
        //   window.location.reload()
        })
        .catch(function (error) {
          console.log(error);
          alert('Something went wrong, please check your input.' + 
          '\nThe author may already have this song with this genre')
        console.log('Something went wrong, please check your input')    
        });
    }

    const handleBack= () => {
      navigate('/MedicalStaffViewDoctors')
    }


    return (

        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A Doctor</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control form-control-lg"
                  placeholder="Enter Doctor Username"
                  value={username}
                  onChange={e => {setUsername(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  value={email}
                  placeholder="Enter Doctor Email"
                  onChange={
                    e => 
                    {setEmail(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Doctor Password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Doctor Phone"
                  name="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Doctor Name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Doctor Work Place"
                  name="work_place"
                  value={work_place}
                  onChange={e => setWork_place(e.target.value)}
                />
              </div>
              <span>              
                <button className="btn btn-primary btn-block">Add Doctor</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
      );
}

export default AddDoctor;