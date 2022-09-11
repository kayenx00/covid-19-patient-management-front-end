import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../api/GeneralAPI';
function UpdatePatientInformation() {
    const [name, setName] = useState("")
    const [id_num, setId_Num] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const {id} = useParams()
    let navigate = useNavigate()
    console.log(id)
    const handleBack = () => {
        const patient_id = localStorage.getItem('user_id')
        navigate('/Patient/'+ patient_id)
    }
    const onSubmit = async () => {
            const s = API + 'patientUpdate'
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
            formData.append('id_num', id_num)
            formData.append('phone', phone)
            formData.append('city', city)
            formData.append('district', district)
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
              alert("Update successfully");
              const patient_id = localStorage.getItem('patient_id')
              navigate('/PatientViewHealthInfo/'+patient_id)
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
            <h2 className="text-center mb-4">Update Health Declaration</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter ID Number"
                  name="id_num"
                  value={id_num}
                  onChange={e => setId_Num(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Phone"
                  name="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your City"
                  name="city"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Phone"
                  name="district"
                  value={district}
                  onChange={e => setDistrict(e.target.value)}
                />
              </div>
              <span>              
                <button type = "submit" className="btn btn-primary btn-block">Update</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
    </div> );
}

export default UpdatePatientInformation;