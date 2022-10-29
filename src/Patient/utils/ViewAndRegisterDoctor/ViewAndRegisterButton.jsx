import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function ViewAndRegisterButton({patient_id}) {
    const id = patient_id;
    localStorage.setItem('patient_id', id)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/PatientViewDoctors')
    }
    return ( 
        <tr>
            <td>
                <button onClick = {() => handleClick()}>View Doctors</button>
            </td>
        </tr>
     );
}

export default ViewAndRegisterButton;