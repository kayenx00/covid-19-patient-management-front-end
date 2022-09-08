import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function DoctorHomePage({doctorDetails}) {
    const details = doctorDetails;
    const navigate = useNavigate()
    console.log(details);
    const {id, name, phone, user_id, username} = details
    const handleClick = () => {
        navigate('/DoctorViewPatients/'+id);
    }
    return ( 
        <div>
            <div className='rows'>
                <h2>Doctor Details</h2>
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
                            <td></td>
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

export default DoctorHomePage;