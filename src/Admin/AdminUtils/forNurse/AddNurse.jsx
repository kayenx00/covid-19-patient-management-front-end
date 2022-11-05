import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../api/GeneralAPI';
function AddNurse() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const token = localStorage.getItem('token')
    const onSubmit = async () => {
        let s = API + 'addNurse'
        let data = JSON.stringify({
            "username": username,
            "email": email,
            "password": password,
            "phone": phone,
            "name": name
          });
        // const formData = new FormData();
        // formData.append("username", username)
        // formData.append("email", email)
        // formData.append("password", password)
        // formData.append("phone", phone)
        // formData.append("name", name)
        const config = {
          method: 'post',
          url: s,
          headers: { 
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`

          },
          data : data
        };
        axios(config).then(function (response) {
            alert("Add successfully")
          console.log(JSON.stringify(response.data));
        //   window.location.reload()
        })
        .catch(function (error) {
          console.log(error);
          alert('Something went wrong, please check your input.')
        console.log('Something went wrong, please check your input')    
        });
    }

    const handleBack= () => {
      navigate('/MedicalStaffViewNurses')
    }


    return (

        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A Nurse</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control form-control-lg"
                  placeholder="Enter Nurse Username"
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
                  placeholder="Enter Nurse Email"
                  onChange={
                    e => 
                    {setEmail(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Nurse Password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Nurse Phone"
                  name="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Nurse Name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <span>              
                <button className="btn btn-primary btn-block">Add Nurse</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
      );
}

export default AddNurse;