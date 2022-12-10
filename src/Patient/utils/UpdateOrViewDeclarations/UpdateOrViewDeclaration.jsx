import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../../api/GeneralAPI';
function UpdateOrViewDeclaration({patient_id}) {
    const id = patient_id;
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.setItem('patient_id', id)
        navigate('/PatientAddHealthInfo/'+id);
    }
    const handleView = () => {
        localStorage.setItem('patient_id', id)
        navigate('/PatientViewHealthInfo/'+id)
    }
    const handleBook = () => {
        navigate('/PatientViewInitiatedAppointment')
    }

    const handleViewUpcoming = () => {
        navigate('/PatientViewUpcomingAppointment')
    }
    const handleRequest= () => {
        navigate('/PatientRequestAppointment')
    }
    const handleGetSymptomsChecker = () =>{
        navigate('/PredictPatientSymptoms')
    }
    const handleEnd = async () => {
        const s = API + 'endTreatmentCourse?id='
        const token = localStorage.getItem('token')
        const formData = new FormData()
        formData.append('id', id)
        const config = {
          method: 'put',
          url: s,
          headers: {
            Authorization: `Bearer ${token}`
          },
    
          data : formData
        };
          await axios(config).then(function (response) {
            console.log(JSON.stringify(response.data))      
            window.location.reload()
          })
          .catch(function (error) {   
            console.log(error);
            alert('Something went wrong, please check your input')
          console.log('Something went wrong, please check your input')    
          });
    }
    return ( 

            <tr>
                <td>                               
                    <button onClick = {() => handleView()}>View Health Declaration</button>
                    <br />
                    <br />
                    <button onClick = {() => handleViewUpcoming()}>View Upcoming Appointments</button>
                    <br />
                    <br />
                    <button onClick={() => handleRequest()}>Request an Appointment</button>
                    <br />
                    <br />
                    <button onClick={() => handleEnd()}>End treatment</button>
                </td>
                <td>
                    <button onClick={() => handleClick()}>Add Health Declaration</button>
                    <br />
                    <br />
                    <button onClick={() => handleBook()}>Book Appointments</button>
                    <br />
                    <br />
                    <button onClick={() => handleGetSymptomsChecker()}> Covid-19 Symptom Checker</button>
                </td>

            </tr>
     );
}
export default UpdateOrViewDeclaration;