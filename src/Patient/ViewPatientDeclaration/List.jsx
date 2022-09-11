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
            <h2 className="text-center">Health Declaration</h2>
            <div className='rows'>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>City </th>
                            <th>District </th>
                            <th>Blood_Pressure </th>
                            <th>Oxygen_Level </th>
                            <th>Other_Diagnose </th>
                            <th>Last update </th>
                            <th>Advice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(l => 
                            <tr key = {l.id}>
                                <td>{l.id}</td>
                                <td>{l.city}</td>
                                <td>{l.district}</td>
                                <td>{l.blood_pressure}</td>
                                <td>{l.oxygen_level}</td>
                                <td>{l.other_diagnose}</td>
                                <td>{moment(l.last_update.lastUpdate).format("YYYY-MM-DD")}</td>
                                <td>{l.advice}</td>
                                <td>
                                    <button onClick = {() => handleUpdate(l.id)}>Update</button>
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