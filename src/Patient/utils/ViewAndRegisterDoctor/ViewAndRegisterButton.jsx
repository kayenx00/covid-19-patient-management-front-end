import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function ViewAndRegisterButton({patient_id, check}) {
    const id = patient_id;
    const {name, phone, id_num, city, district} = check;
    localStorage.setItem('patient_id', id)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/PatientViewDoctors')
    }
    return ( 
        <tr>
            <td>
                <button disabled = {name === null && phone === null && id_num === null 
                                    && city === null && district === null}
                        onClick = {() => handleClick()}>View Doctors</button>
            </td>
        </tr>
     );
}

export default ViewAndRegisterButton;