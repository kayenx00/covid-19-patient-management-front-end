import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateOrViewDeclaration({patient_id}) {
    const id = patient_id;
    const navigate = useNavigate()
    const HandleClick = () => {
        localStorage.setItem('patient_id', id)
        navigate('/PatientAddHealthInfo/'+id);
    }
    const HandleView = () => {
        localStorage.setItem('patient_id', id)
        navigate('/PatientViewHealthInfo/'+id)
    }
    const HandleBook = () => {
        navigate('/PatientViewInitiatedAppointment')
    }

    const HandleViewUpcoming = () => {
        navigate('/PatientViewUpcomingAppointment')
    }
    const HandleRequest= () => {
        navigate('/PatientRequestAppointment')
    }
    return ( 

            <tr>
                <td>                               
                    <button onClick = {() => HandleView()}>View Health Declaration</button>
                    <br />
                    <br />
                    <button onClick = {() => HandleViewUpcoming()}>View Upcoming Appointments</button>
                    <br />
                    <br />
                    <button onClick={() => HandleRequest()}>Request an Appointment</button>
                </td>
                <td>
                    <button onClick={() => HandleClick()}>Add Health Declaration</button>
                    <br />
                    <br />
                    <button onClick={() => HandleBook()}>Book Appointments</button>
                </td>

            </tr>
     );
}
export default UpdateOrViewDeclaration;