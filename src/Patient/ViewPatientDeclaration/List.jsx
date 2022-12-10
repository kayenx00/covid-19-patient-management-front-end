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
            <div className='rows'>
           <table className = "table table-striped table-bordered">
            <thead>
                <tr>
                    {/* <td>ID</td> */}
                    <td>Blood Pressure</td>
                    <td>Oxygen Level</td>
                    <td>Fever</td>
                    <td>Headache</td>
                    <td>Muscle Pain</td>
                    <td>Other Diagnose</td>
                    <td>Last Update</td>
                    <td>Advice from your Doctor</td>
                    <td>Advice from the Nurse</td>
                    <td>Measured_by</td>

                </tr>
            </thead>
            <tbody>
                {list.map(l =>
                    <tr key = {l.id}>
                        <td>{l.blood_pressure}</td>
                        <td>{l.oxygen_level}</td>
                        <td>{l.fever}</td>
                        <td>{l.headache}</td>
                        <td>{l.muscleache}</td>
                        <td>{l.other_diagnose}</td>
                        <td>{moment(l.last_update).format("YYYY-MM-DD")}</td>
                        <td>{l.advice}</td>
                        <td>{l.comment_from_nurse}</td>
                        <td>{l.measured_by}</td>

                        {/* <td>
                            <button onClick = {()=> handleUpdate(l.id)}>
                                Update
                            </button>
                        </td> */}
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
        </div>
     );
}

export default List;