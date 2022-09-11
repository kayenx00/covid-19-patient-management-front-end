import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateOrViewDeclaration({patient_id}) {
    const id = patient_id;
    const navigate = useNavigate()
    const HandleClick = () => {
        //localStorage.setItem('patient_id', user_id)
        navigate('/PatientAddHealthInfo/'+id);
    }
    const HandleView = () => {
        localStorage.setItem('patient_id', id)
        navigate('/PatientViewHealthInfo/'+id)
    }
    return ( 
 

            <tr>
                <td>                               
                    <button onClick = {() => HandleView()}>View Health Declaration</button>
                </td>
                <td>
                    <button onClick={() => HandleClick()}>Add Health Declaration</button>
                </td>
            </tr>


     );
}

export default UpdateOrViewDeclaration;