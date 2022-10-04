import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../../api/GeneralAPI';
function MakeAdvice() {
    const [advice, setAdvice] = useState("")
    const {id} = useParams()
    let navigate = useNavigate()
    console.log(id)
    const handleBack = () => {
        const patient_id = localStorage.getItem('patient_id')
        navigate('/DoctorViewPatientDeclaration/'+ patient_id)
    }
    const onSubmit = async () => {
            const s = API + 'updateAdvice'
            // const data = JSON.stringify({
            //   "id": id,
            //   "name": name,
            //   "author": author,
            //   "genre": genre
            // });
            const token = localStorage.getItem('token')
            const formData = new FormData()
            formData.append('id', id)
            formData.append('advice', advice)
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
            <h2 className="text-center mb-4">Make your advice</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                {/* <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Advice"
                  name="advice"
                  value={advice}
                  onChange={e => setAdvice(e.target.value)}
                /> */}
                <textarea rows = "10" cols = "50"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Advice"
                  name="advice"
                  value={advice}
                  onChange={e => setAdvice(e.target.value)}>
                </textarea>
              </div>
              <span>              
                <button type = "submit" className="btn btn-primary btn-block">Make Advice</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
              </span>
            </form>
          </div>
        </div>
    </div> );
}

export default MakeAdvice;
