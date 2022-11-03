import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const moment = require('moment');
function List({healthDeclaration, patient_id}) {
    const list = healthDeclaration
    const id = patient_id
    const navigate = useNavigate();
    console.log(list);
    const handleBack = () =>{
        const nurse_id = localStorage.getItem('nurse_id')
        navigate('/NurseViewPatients/' + nurse_id)
    }
    const handleAdd = () => {
        navigate('/NurseAddHealthDeclaration/'+id)
    }
    return ( 
        <div>
            <h2 className="text-center">Health Declaration</h2>
            <div className='rows'>
            <button onClick = {()=>handleAdd()}>Add Health Declaration</button>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Blood_Pressure</th>
                            <th>Oxygen_Level</th>
                            <th>Fever</th>
                            <th>Headache</th>
                            <th>Muscle Pain</th>
                            <th>Other_Diagnose</th>
                            <th>Last update </th>
                            <th>Advice from Doctor</th>
                            <th>Measure By</th>
                            <th>Comment to your Patient</th>
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
                                <td>{l.measured_by}</td>                            
                                <td>{l.comment}</td>                            
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