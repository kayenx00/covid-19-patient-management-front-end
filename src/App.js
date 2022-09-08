import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProtectedRoutes from './Authentication/ProtectedRoutes';
import NavBar from './Authentication/Views/NavBar/NavBar';
import Login from './Authentication/Views/LoginView/Login';
import Register from './Authentication/Views/RegisterView/Register';
import NotFoundError from './Authentication/Views/ErrorView/NotFoundError';
// {Admin}
import FetchDoctor from './Admin/AdminUtils/forDoctor/viewDoctor/FetchDoctor';
import AddDoctor from './Admin/AdminUtils/forDoctor/AddDoctor';
import UpdateDoctor from './Admin/AdminUtils/forDoctor/UpdateDoctor';
import FetchPatient from './Admin/AdminUtils/forPatient/viewPatient/FetchPatient';
import ViewAdminHomePage from './Admin/ViewAdminHomePage';
//Doctor
import FetchPatientUnderGuide from './Doctor/utils/viewPatientUnderGuide/FetchPatientUnderGuide';
import makeAdvice from './Doctor/utils/makeAdvice';
import ViewDoctorHomePage from './Doctor/utils/ViewDoctorHomePage';
import ViewOnePatientDeclaration from './Doctor/utils/ViewOnePatientDeclaration';
//Patient
import FetchDoctorList from './Patient/ViewDoctorForRegister/FetchDoctorList';
import FetchList from './Patient/ViewPatientDeclaration/FetchList';
import UpdateHealthDeclaration from './Patient/UpdateHealthDeclaration';
import UpdatePatientInformation from './Patient/UpdatePatientInformation';
import ViewPatientHomePage from './Patient/ViewPatientHomePage';
import AddHealthDeclaration from './Patient/AddHealthDeclaration';
function App() {
  const token = localStorage.getItem('token')
  const [isLoggedin, setIsLoggedin] = useState(token ? true : false)
  const DAY_TO_MILLISECOND = 86400000;
  if(token != null){
    const current = new Date();
    const currentToMilliseconds = current.getTime();
    const previous = localStorage.getItem('DateOfLastLogin')
    const previousDate = Date.parse(previous);
    // const a = previousDate.getTime();
    console.log("Previous: " + previousDate);
    console.log("Current: " + currentToMilliseconds);
    console.log(currentToMilliseconds - previousDate);
    const checkDuration = currentToMilliseconds - previousDate;
    if(checkDuration >= DAY_TO_MILLISECOND){
      localStorage.removeItem('token');
      setIsLoggedin(false);
    }
  }

  console.log(isLoggedin)
  return (
    <div>
      <Router>
      <NavBar isAuth = {isLoggedin}
              setIsLoggedin = {setIsLoggedin}/>
        <Routes>
          {/* <Route exact path = "/" element = {<FetchSong />}/>
          <Route exact path = "/viewAndUpdate/:id" element = {<PlayAndViewAndUpdateSong/>} /> 
          <Route exact path = "/add/Song" element = {<AddSong/>} /> */}
          <Route exact path = "/" element = {<Login setIsLoggedin = {setIsLoggedin}/>}/>
          <Route exact path = "/register" element = {<Register/>}/>
          <Route element = {<ProtectedRoutes isLoggedin={isLoggedin}/>}>
            {/* Admin */}
            <Route exact path = "/Admin" element = {<ViewAdminHomePage />}/>
            <Route exact path = "/AdminViewDoctors" element = {<FetchDoctor/>} /> 
            <Route exact path = "/AdminviewPatients" element = {<FetchPatient/>} />
            <Route exact path = "/AdminUpdateDoctor/:id" element = {<UpdateDoctor/>} />
            <Route exact path = "/AdminAddDoctor" element = {<AddDoctor/>} />
            {/* Doctor */}
            <Route exact path = "/Doctor/:id" element = {<ViewDoctorHomePage />}/>
            <Route exact path = "/DoctorViewPatients/:id" element = {<FetchPatientUnderGuide/>} /> 
            <Route exact path = "/DoctorViewPatient/:id" element = {<ViewOnePatientDeclaration/>} />
            <Route exact path = "/DoctorAddAdvice/:id" element = {<makeAdvice/>} />
            {/* Patient */}
            <Route exact path = "/Patient/:id" element = {<ViewPatientHomePage />}/>
            <Route exact path = "/PatientUpdateInfo" element = {<UpdatePatientInformation/>} /> 
            <Route exact path = "/PatientViewDoctors" element = {<FetchDoctorList/>} /> 
            <Route exact path = "/PatientViewHealthInfo" element = {<FetchList/>} />
            <Route exact path = "/PatientAddHealthInfo" element = {<AddHealthDeclaration/>} />
            <Route exact path = "/PatientUpdateHealthInfo" element = {<UpdateHealthDeclaration/>} />
        
          </Route>
          <Route path = "*" element = {<NotFoundError/> } />
          {/* <Route exact path = "/update/Song/:id" element = {< UpdateSongInfo/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;
