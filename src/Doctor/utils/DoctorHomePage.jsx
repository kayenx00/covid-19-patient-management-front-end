import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function DoctorHomePage({doctorDetails}) {
    const details = doctorDetails;
    const navigate = useNavigate()
    console.log(details);
    const {id, name, phone, user_id, username} = details
    localStorage.setItem('doctor_id', id)
    const handleClick = () => {
        localStorage.setItem('doctor_id', id)
        navigate('/DoctorViewPatients/'+id);
    }
    const handleViewRequestAppointment = () => {
        navigate('/DoctorViewRequestAppointment/');
    }
    const handleViewUpcomingAppointment = () => {
        navigate('/DoctorViewUpcomingAppointment/');
    }
    const handleInitiate = () => {
        navigate('/DoctorInitiateAppointment');
    }
    const handleView = () => {
        navigate('/DoctorViewNurses');
    }
    return ( 
        <div>
            <div className='rows'>
                <h2 className ='text-center'>Doctor Details</h2>
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
                            <td>
                                <button onClick={handleViewUpcomingAppointment}>View Upcoming Appointments</button>
                            </td>
                            <td>
                                <button onClick={handleViewRequestAppointment}>View Request Appointments</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={handleInitiate}>Initiate A Appointment</button>
                            </td>
                            <td>
                                <button onClick={handleClick}>View Patients</button>
                            </td>
                        </tr>
                        {/* <tr>
                            <button onClick={handleView}>View Nurses</button>
                        </tr> */}
                    </thead>
                </table>
            </div>
        </div>
     );
}

export default DoctorHomePage;