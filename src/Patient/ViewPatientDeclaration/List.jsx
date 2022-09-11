import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
function List({details}) {
    const list = details
    const navigate = useNavigate();
    console.log(list);
    const handleBack = () =>{
        const patient_id = localStorage.getItem('user_id')
        navigate('/Patient/'+patient_id)
    }
    const handleUpdate=(id)=>{
        navigate('/PatientUpdateHealthInfo/'+ id)
    }
    return ( 
        <div>
           <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Blood Pressure</td>
                    <td>Oxygen Level</td>
                    <td>Other Diagnose</td>
                    <td>Last Update</td>
                    <td>Advice</td>
                </tr>
            </thead>
            <tbody>
                {list.map(l =>
                    <tr key = {l.id}>
                        <td>{l.id}</td>
                        <td>{l.blood_pressure}</td>
                        <td>{l.oxygen_level}</td>
                        <td>{l.other_diagnose}</td>
                        <td>{l.last_update}</td>
                        <td>{l.advice}</td>
                        <td>
                            <button onClick = {()=> handleUpdate(l.id)}>
                                Update
                            </button>
                        </td>
                    </tr>)}
                    <tr>
                        <td>
                            <button onClick = {()=>handleBack()}>
                                Back
                            </button>
                        </td>
                    </tr>
            </tbody>
            </table> 
        </div>
     );
}

export default List;