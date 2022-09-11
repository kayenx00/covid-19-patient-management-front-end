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
            
        </div>
     );
}

export default List;