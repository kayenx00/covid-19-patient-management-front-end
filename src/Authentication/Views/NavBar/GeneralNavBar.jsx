import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminNavBar } from './AdminNavBar';
import { PatientNavBar } from './PatientNavBar';
import { DoctorNavBar } from './DoctorNavBar';
export const GeneralNavBar = (params) => {
    const navigate = new useNavigate();
    console.log(params.isAuth);
    const handleLogout=() =>{
        params.setIsLoggedin(false);
        params.setIsPatient(false)
        params.setIsDoctor(false)
        params.setIsAdmin(false)
        localStorage.clear();
        navigate('/');
    }
    if(params.isAuth === true && params.isPatient === true)
    {
        return ( 
            <>
                <PatientNavBar />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button onClick={handleLogout}>
                    Log out
                </button>
            </>
     )}
    else if(params.isAuth === true && params.isDoctor === true){
        return (
            <>
                <DoctorNavBar />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button onClick={handleLogout}>
                    Log out
                </button>
            </>
        )}
    else if(params.isAuth === true && params.isAdmin === true){
        return (                
            <>
                <AdminNavBar />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button onClick={handleLogout}>
                    Log out
                </button>
            </>
            )}
//     if(params.isAuth === false)
//     {
//         return ( 
//             <div>
            
//             </div>
//      );}
//     else {
//         return (
//             <div>
//                 <button onClick={handleLogout}>
//                     Log out
//                 </button>
//             </div>
//         )
// }
}

// export default NavBar;