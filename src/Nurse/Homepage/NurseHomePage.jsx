import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function NurseHomePage({nurseDetails}) {
    const details = nurseDetails;
    const navigate = useNavigate()
    console.log(details);
    const {id, name, phone, email, user_id, username, work_under_doctor} = details
    localStorage.setItem('nurse_id', id)
    const handleClick = () => {
        localStorage.setItem('nurse_id', id)
        navigate('/NurseViewPatients/'+id);
    }   
    // const handleViewRequestAppointment = () => {
    //     navigate('/DoctorViewRequestAppointment/');
    // }
    // const handleViewUpcomingAppointment = () => {
    //     navigate('/DoctorViewUpcomingAppointment/');
    // }
    // const handleInitiate = () => {
    //     navigate('/DoctorInitiateAppointment');
    // }
    return ( 
        <div>
            <div className='rows'>
                <h2 className ='text-center'>Nurse Details</h2>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <td>ID: </td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>name: </td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>Phone: </td>
                            <td>{phone}</td>
                        </tr>
                        <tr>
                            <td>User ID: </td>
                            <td>{user_id}</td>
                        </tr>
                        <tr>
                            <td>User name: </td>
                            <td>{username}</td>
                        </tr>
                        <tr>
                            <td>Work under Doctor: </td>
                            <td>{work_under_doctor}</td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <button onClick={handleClick}>View Patients</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
     );
}

export default NurseHomePage;