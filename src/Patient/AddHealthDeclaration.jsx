import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { API } from '../api/GeneralAPI';
function AddHealthDeclaration() {
    const [blood_pressure, setBlood_Pressure] = useState("")
    const [oxygen_level, setOxygen_Level] = useState("")
    const [other_diagnose, setOther_Diagnose] = useState("")
    const {id} = useParams()
    let navigate = useNavigate()
    console.log(id)
    const handleBack = () => {
        const patient_id = localStorage.getItem('user_id')
        navigate('/Patient/'+ patient_id)
    }
    const onSubmit = async (e) => {
            e.preventDefault();
            const s = API + 'addHealthDeclaration'
            // const data = JSON.stringify({
            //   "id": id,
            //   "name": name,
            //   "author": author,
            //   "genre": genre
            // });
            const token = localStorage.getItem('token')
            const formData = new FormData()
            formData.append('blood_pressure', blood_pressure)
            formData.append('oxygen_level', oxygen_level)
            formData.append('other_diagnose', other_diagnose)
            formData.append('id', id)
            const config = {
              method: 'post',
              url: s,
              headers: {
                Authorization: `Bearer ${token}`
              },
        
              data : formData
            };
            await axios(config).then(function (response) {
              console.log(JSON.stringify(response.data));
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
            <h2 className="text-center mb-4">Add Health Declaration</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Blood Pressure"
                  name="blood_pressure"
                  value={blood_pressure}
                  onChange={e => setBlood_Pressure(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Oxygen Level"
                  name="oxygen_level"
                  value={oxygen_level}
                  onChange={e => setOxygen_Level(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Other Diagnose"
                  name="other_diagnose"
                  value={other_diagnose}
                  onChange={e => setOther_Diagnose(e.target.value)}
                />
              </div>
              <span>              
                <button type = "submit" className="btn btn-primary btn-block">Add</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
    </div> );
}

export default AddHealthDeclaration;