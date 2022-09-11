import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../api/GeneralAPI';
function UpdateHealthDeclaration() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [blood_pressure, setBlood_Pressure] = useState("")
  const [oxygen_level, setOxygen_Level] = useState("")
  const [other_diagnose, setOther_Diagnose] = useState("")
  const token = localStorage.getItem('token')
  const onSubmit = async(e) => {
    const data = new FormData();
    data.append('blood_pressure', blood_pressure);
    data.append('oxygen_level', oxygen_level);
    data.append('other_diagnose', other_diagnose);
    data.append('id', id);

  const config = {
    method: 'put',
    url: API + 'updateHealthDeclaration',
    headers: { 
    'Authorization': `Bearer ${token}`
  },
  data : data
};

await axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  const patient_id = localStorage.getItem('patient_id')
  navigate('/PatientViewHealthInfo/' + patient_id)
})
.catch(function (error) {
  console.log(error);
});
  }
  const handleBack = ()=> {
    const patient_id = localStorage.getItem('patient_id')
    navigate('/PatientViewHealthInfo/'+patient_id)
  }  
  return ( 
    <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Update Health Declaration</h2>
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
                <button type = "submit" className="btn btn-primary btn-block">Update</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
    </div> );
}

export default UpdateHealthDeclaration;