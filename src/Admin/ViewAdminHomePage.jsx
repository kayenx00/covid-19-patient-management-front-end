import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function ViewAdminHomePage() {
    const navigate = useNavigate()
    const handleDoctors=()=>{
        navigate('/MedicalStaffViewDoctors')
    }
    // const handlePatients=()=>{
        
    // }
    const handleNurses=()=>{
      navigate('/MedicalStaffViewNurses')
    }
    return ( 
        <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Medical staff Action</h2>
              <span>              
                <button className="btn btn-primary btn-block" onClick = {() => handleDoctors()}>Doctors</button>
                <button className="btn btn-primary btn-block" onClick = {() => handleNurses()}>Nurses</button>
                {/* <button className="btn btn-primary btn-block" onClick = {() => handlePatients()}>Patients</button> */}
              </span>
          </div>
        </div>
        </div>
     );
}

export default ViewAdminHomePage;