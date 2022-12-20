import React, { useState } from 'react';
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
        const doctor_id = localStorage.getItem('user_id')
        navigate('/Doctor/'+doctor_id)
    }
    console.log(checked.length)
    const handleCheckBox = (id) =>{
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if(isChecked){
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    const handleConfirm = () => {
        const s = API + 'confirmAppointment'
        const formData = new FormData();
        const doctor_id = localStorage.getItem('doctor_id')
        formData.append("doctor_id", doctor_id )
        for(let i = 0; i < checked.length; i++){
            formData.append("id", checked[i])
        }
        const config = {
            method: 'put',
            url: s,
            headers: { 
            //   'Content-Type': 'application/json', 
              Authorization: `Bearer ${token}`

            },
            data : formData
          };
          axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            // navigate('/')
            window.location.reload()
          })
          .catch(function (error) {
            console.log(error);
            alert('Something went wrong, please check your input')
          });
    }
    const handleReject = () => {
        const s = API + 'rejectRequestAppointment'
        const formData = new FormData();
        const doctor_id = localStorage.getItem('doctor_id')
        formData.append("doctor_id", doctor_id )
        for(let i = 0; i < checked.length; i++){
            formData.append("id", checked[i])
        }
        const config = {
            method: 'delete',
            url: s,
            headers: { 
            //   'Content-Type': 'application/json', 
              Authorization: `Bearer ${token}`

            },
            data : formData
          };
          axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            // navigate('/')
            window.location.reload()
          })
          .catch(function (error) {
            console.log(error);
            alert('Something went wrong, please check your input')
          });
    }
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
                    <td></td>
                    <td>Date</td>
                    <td>Start time</td>
                    <td>Duration (in minute)</td>
                    <td>Doctor Name</td>
                    <td>Patient Name</td>
                </tr>
            </thead>
            <tbody>
                {list.map(l =>
                    <tr key = {l.id}>
                        <td>
                            <input type="checkbox" 
                                        checked = {checked.includes(l.id)} 
                                        onChange = {() => handleCheckBox(l.id)}/>
                        </td>
                        {/* <td>{l.id}</td> */}
                        <td>{moment(l.date).format("YYYY-MM-DD")}</td>
                        <td>{l.start_time}</td>
                        <td>{l.duration}</td>
                        <td>{l.doctor_name}</td>
                        <td>{l.patient_name}</td>
                    </tr>)}
                    <tr>
                        <td>
                            <button onClick = {()=>handleBack()}>
                                Back
                            </button>
                        </td>
                        <td>
                            <button 
                            disabled = {(checked <= 0)}
                            onClick = {()=>handleConfirm()}>
                                Confirm Appointment
                            </button>
                        </td>       
                        <td>
                            <button 
                            disabled = {(checked <= 0)}
                            onClick = {()=>handleReject()}>
                                Reject Appointment
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