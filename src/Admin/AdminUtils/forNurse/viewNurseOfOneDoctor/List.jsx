import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { API } from '../../../../api/GeneralAPI';
function List({details}) {
        const list = details
        const navigate = useNavigate();
        const [checked, setChecked] = useState([])
        const token = localStorage.getItem('token')
        const handleBack = () =>{
            navigate('/MedicalStaffViewDoctors/')
        }
        console.log(checked.length)
        console.log(list);
        // const handleUpdate=(id)=>{
        //     navigate('/PatientUpdateHealthInfo/'+ id)
        // }
        return ( 
            <div>
                <div className='rows'>
               <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>User ID</td>
                        <td>Username</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map(l =>
                        <tr key = {l.id}>
                            <td>{l.name}</td>
                            <td></td>
                            <td>{l.phone}</td>
                            <td>{l.user_id}</td>
                            <td>{l.username}</td>
                            {/* <td><button onClick={e => handleCancel(l.id)}>Cancel Appointment</button></td> */}
                        </tr>)}
                        <tr>
                            <td>
                                <button onClick={() => handleBack()}> Back </button>
                            </td>                       
                        </tr>
                </tbody>
                </table> 
                </div>
            </div>
         );
        }

export default List;