import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateOrViewDeclaration from './utils/UpdateOrViewDeclarations/UpdateOrViewDeclaration';
import ViewAndRegisterButton from './utils/ViewAndRegisterDoctor/ViewAndRegisterButton';
function PatientHomePage({patientDetails}) {
    const details = patientDetails;
    const navigate = useNavigate()
    console.log(details);
    const {id, name, id_num, phone, city, district, user_id, username, chosen_doctor} = details
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
    function RegisterOrUpdateAndView(){
        if(chosen_doctor !==null){
            return <UpdateOrViewDeclaration patient_id = {id}/>
        }
        else {
            return <ViewAndRegisterButton />
        }
        
    }
    return ( 
        <div>
            <div className='rows'>
                <h2 className='text-center'>Patient Details</h2>
                <table className='table table-striped table-bordered'>
                    <tbody>
                        
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
                            <td>Chosen Doctor ID: </td>
                            <td>{chosen_doctor}</td>
                        </tr>
                        {RegisterOrUpdateAndView()}
                        {/* <tr>
                            <td>
                                <button onClick = {() => handleView()}>View Health Declaration</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick()}>Add Health Declaration</button>
                            </td>
                        </tr> */}
                        <tr>
                        
                            <td>
                                <button onClick={() => handleUpdate()}>Update Information</button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
    }
export default PatientHomePage;

