import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../../api/GeneralAPI';
function UpdateNurse() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [work_place, setWork_place] = useState("")
    const {id} = useParams()
    let navigate = useNavigate()
    console.log(id)
    const handleBack = () => {
        navigate('/MedicalStaffViewNurses')
    }
    const onSubmit = async () => {
            const s = API + 'updateNurse'
            // const data = JSON.stringify({
            //   "id": id,
            //   "name": name,
            //   "author": author,
            //   "genre": genre
            // });
            const token = localStorage.getItem('token')
            const formData = new FormData()
            formData.append('id', id)
            formData.append('name', name)
            formData.append('phone', phone)
            formData.append('work_place', work_place)
            const config = {
              method: 'put',
              url: s,
              headers: {
                Authorization: `Bearer ${token}`
              },
        
              data : formData
            };
            await axios(config).then(function (response) {
              console.log(JSON.stringify(response.data));
              navigate('/MedicalStaffViewNurses')
            //   window.location.reload()
            })
            .catch(function (error) {
              console.log(error);
              alert('Something went wrong, please check your input')
            console.log('Something went wrong, please check your input')    
            });
          }
    return ( 
    <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Update a Nurse</h2>
            <form onSubmit={onSubmit}>
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
                  placeholder="Enter Nurse Work Place"
                  name="work_place"
                  value={work_place}
                  onChange={e => setWork_place(e.target.value)}
                />
              </div>
              <span>       
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>       
                <button type = "submit" className="btn btn-primary btn-block">Update Nurse</button>
              </span>
            </form>
          </div>
        </div>
    </div> );
}

export default UpdateNurse;