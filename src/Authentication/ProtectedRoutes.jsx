import React, { useState, useEffect } from 'react';
import { Navigate, Link, Outlet } from 'react-router-dom';
function ProtectedRoutes ({isLoggedin, redirectpath = "/", children}){
    console.log(isLoggedin);
    if(!isLoggedin){
        return <Navigate to = {redirectpath} replace />
    }
    return  children ? children : <Outlet />;;
}

export default ProtectedRoutes;