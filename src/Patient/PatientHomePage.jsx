import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function PatientHomePage({patientDetails}) {
    const details = patientDetails;
    const navigate = useNavigate()
    console.log(details);
    const {id, name, id_num, phone, city, district, user_id, username} = details
    const handleClick = () => {
        //localStorage.setItem('patient_id', user_id)
        navigate('/PatientAddHealthInfo/'+id);
    }
    const handleUpdate=()=>{
        //localStorage.setItem('patient_id', user_id)
        navigate('/PatientUpdateInfo/'+id)
    }
    const handleView = () => {
        localStorage.setItem('patient_id', id)
        navigate('/PatientViewHealthInfo/'+id)
    }
    return ( 
        <div>
            <div className='rows'>
                <h2 className='text-center'>Patient Details</h2>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <td>ID: </td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>Name: </td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>ID number: </td>
                            <td>{id_num}</td>
                        </tr>
                        <tr>
                            <td>Phone: </td>
                            <td>{phone}</td>
                        </tr>
                        <tr>
                            <td>City: </td>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <td>District: </td>
                            <td>{district}</td>
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
                                <button onClick = {() => handleView()}>View Health Declaration</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick()}>Add Health Declaration</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button onClick={() => handleUpdate()}>Update Information</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
     );
    }
export default PatientHomePage;