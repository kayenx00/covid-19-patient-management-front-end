import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const moment = require('moment');
function HealthDeclarationOfPatient({treatmentCourse}) {
    const list = treatmentCourse
    const navigate = useNavigate();
    console.log(list);
    const handleBack = () =>{
        const doctor_id = localStorage.getItem('doctor_id')
        navigate('/DoctorViewPatients/'+doctor_id)
    }
    const handleViewDeclaration = (id) => {
        localStorage.setItem('course_id', id)
        navigate('/ViewDeclarationOnTreatCourse/' + id)
    }
    return ( 
        <div>
            <h2 className="text-center">Treatment Course</h2>
            <div className='rows'>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Start date</th>
                            <th>End Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(l => 
                            <tr key = {l.id}>
                                <td>{l.patient_name}</td>
                                <td>{l.doctor_name}</td>
                                <td>{moment(l.start_date).format("YYYY/MM/DD")}</td>
                                <td>{l.end_date === null ? "Until Now" : moment(l.end_date).format("YYYY/MM/DD")}</td>
                                <td>
                                    <button onClick = {() => handleViewDeclaration(l.id)}>View Declaration</button>
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

export default HealthDeclarationOfPatient;