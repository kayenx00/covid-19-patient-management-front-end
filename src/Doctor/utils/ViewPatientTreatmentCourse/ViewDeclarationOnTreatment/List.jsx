import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const moment = require('moment');
function List({healthDeclaration}) {
    const list = healthDeclaration
    const navigate = useNavigate();
    console.log(list);
    const handleBack = () =>{
        const patient_id = localStorage.getItem('patient_id')
        navigate('/DoctorViewPatientTreatment/'+patient_id)
    }
    const handleClick=(id)=>{
        navigate('/DoctorAddAdvice/'+ id)
    }
    return ( 
        <div>
            <h2 className="text-center">Health Declaration</h2>
            <div className='rows'>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Blood_Pressure </th>
                            <th>Oxygen_Level </th>
                            <th>Fever</th>
                            <th>Headache</th>
                            <th>Muscle Pain</th>
                            <th>Other_Diagnose </th>
                            <th>Last update </th>
                            <th>Advice to yout Patient</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(l => 
                            <tr key = {l.id}>
                                <td>{l.id}</td>
                                <td>{l.blood_pressure}</td>
                                <td>{l.oxygen_level}</td>
                                <td>{l.fever}</td>
                                <td>{l.headache}</td>
                                <td>{l.muscleache}</td>
                                <td>{l.other_diagnose}</td>
                                <td>{moment(l.last_update.lastUpdate).format("YYYY-MM-DD")}</td>
                                <td>{l.advice}</td>
                                <td>
                                    <button onClick = {() => handleClick(l.id)}>Add Advice</button>
                                </td>
                            
                            </tr>)}
                            <tr>
                        <td>
                            <button onClick = {()=>handleBack()}>Back</button>
                        </td>
                    </tr>   
                    </tbody>

                </table>
            </div>

        </div>
     );
}

export default List;