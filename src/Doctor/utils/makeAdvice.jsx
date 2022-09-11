import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../../api/GeneralAPI';
function MakeAdvice() {
    const {id} = useParams();
    console.log(id)
    const url = API + 'DoctorMakeAdvice?id=' + id;
    const navigate = useNavigate();
    const handleBack = () => {
        const patient_id = localStorage.getItem('patient_id')
        navigate('/DoctorViewPatientDeclaration/' + patient_id)
    }
    return ( 
        <div>

        </div>
     );
}

export default MakeAdvice;