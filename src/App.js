import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProtectedRoutes from './Authentication/ProtectedRoutes';
import { GeneralNavBar } from './Authentication/Views/NavBar/GeneralNavBar';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import About from './Homepage/BodyElement/About';
// import NavBar from './Authentication/Views/NavBar/NavBar';
import Login from './Authentication/Views/LoginView/Login';
import Register from './Authentication/Views/RegisterView/Register';
import NotFoundError from './Authentication/Views/ErrorView/NotFoundError';
import HomePage from './Homepage/HomePage';
// {Admin}
import FetchDoctor from './Admin/AdminUtils/forDoctor/viewDoctor/FetchDoctor';
import AddDoctor from './Admin/AdminUtils/forDoctor/AddDoctor';
import UpdateDoctor from './Admin/AdminUtils/forDoctor/UpdateDoctor';
import FetchPatient from './Admin/AdminUtils/forPatient/viewPatient/FetchPatient';
import ViewAdminHomePage from './Admin/ViewAdminHomePage';
import FetchNurse from './Admin/AdminUtils/forNurse/viewNurse/Fetch';
import UpdateNurse from './Admin/AdminUtils/forNurse/UpdateNurse';
import FetchNurseOfDoctor from './Admin/AdminUtils/forNurse/viewNurseOfOneDoctor/Fetch';
import FetchNursesForAssign from './Admin/AdminUtils/forDoctor/viewNurseForAssign/Fetch';
import AddNurse from './Admin/AdminUtils/forNurse/AddNurse';
//Doctor
import FetchPatientUnderGuide from './Doctor/utils/viewPatientUnderGuide/FetchPatientUnderGuide';
import MakeAdvice from './Doctor/utils/MakeAdvice';
import ViewDoctorHomePage from './Doctor/utils/ViewDoctorHomePage';
import ViewOnePatientDeclaration from './Doctor/utils/ViewOnePatientDeclaration';
import FetchRequestAppointment from './Doctor/utils/appointments/ViewRequestAppointments/Fetch';
import FetchUpcomingAppointmentsForDoctor from './Doctor/utils/appointments/ViewUpcommingAppointments/Fetch';
import InitiateAppointment from './Doctor/utils/appointments/InitiateAnAppointment';
import ViewPatientTreatmentCourse from './Doctor/utils/ViewPatientTreatmentCourse/Fetch';
import ViewPatientDeclarations from './Doctor/utils/ViewPatientTreatmentCourse/ViewDeclarationOnTreatment/Fetch';
//Nurse
import ViewNurseHomePage from './Nurse/Homepage/FetchNurseInfo';
import FetchPatientForNurse from './Nurse/ViewPatient/Fetch';
import NurseViewOnePatientDeclaration from './Nurse/ViewPatientDeclaration/Fetch';
import NurseAddHealthDeclaration from './Nurse/AddHealthDeclaration';
//Patient
import FetchDoctorList from './Patient/ViewDoctorForRegister/FetchDoctorList';
import FetchList from './Patient/ViewPatientDeclaration/FetchList';
import UpdateHealthDeclaration from './Patient/UpdateHealthDeclaration';
import UpdatePatientInformation from './Patient/UpdatePatientInformation';
import ViewPatientHomePage from './Patient/ViewPatientHomePage';
import AddHealthDeclaration from './Patient/AddHealthDeclaration';
import FetchInitiatedAppointment from './Patient/PatientAppointments/ViewInitiatedAppointment/Fetch';
import FetchUpcomingAppointmentsForPatient from './Patient/PatientAppointments/ViewUpcomingAppointment/Fetch';
import RequestAppointment from './Patient/PatientAppointments/RequestAppointment';
import SymptomsQuestion from './Patient/symptomPrediction/SymptomQuestions';
// Guest
import SearchPatient from './Guest/SearchPatient/SearchPatient';

function App() {
  const token = localStorage.getItem('token')
  const user_id = localStorage.getItem('token')
  const [isLoggedin, setIsLoggedin] = useState(token ? true : false)
  const [isPatient, setIsPatient] = useState(user_id ? true : false)
  const [isNurse, setIsNurse] = useState(user_id ? true : false)
  const [isDoctor, setIsDoctor] = useState(user_id ? true : false)
  const [isAdmin, setIsAdmin] = useState(user_id ? true : false)

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
      <Header isAuth = {isLoggedin}
              setIsLoggedin = {setIsLoggedin}/> 
      {/* <GeneralNavBar isAuth = {isLoggedin}
              setIsLoggedin = {setIsLoggedin}
              isPatient = {isPatient}
              setIsPatient = {setIsPatient}
              isDoctor = {isDoctor}
              setIsDoctor = {setIsDoctor}
              isAdmin = {isAdmin}
              setIsAdmin = {setIsAdmin}/> */}
      
        <Routes>
          {/* <Route exact path = "/" element = {<FetchSong />}/>
          <Route exact path = "/viewAndUpdate/:id" element = {<PlayAndViewAndUpdateSong/>} /> 
          <Route exact path = "/add/Song" element = {<AddSong/>} /> */}
          <Route exact path ="/" element = {<HomePage />}/>
          <Route exact path ="/about" element = {<About />}/>
          <Route exact path = "/login" element = {<Login 
                                                  setIsLoggedin = {setIsLoggedin}
                                                  setIsAdmin = {setIsAdmin}
                                                  setIsDoctor = {setIsDoctor}
                                                  setIsPatient = {setIsPatient}
                                                  setIsNurse = {setIsNurse}/>}/>
          <Route exact path = "/register" element = {<Register setIsLoggedin = {setIsLoggedin}/>}/>
          <Route exact path = "/PredictPatientSymptoms" element = {<SymptomsQuestion/>} />
          <Route exact path = "/SearchPatient" element = {<SearchPatient/>} />
          <Route element = {<ProtectedRoutes isLoggedin={isLoggedin}/>}>
            {/* Admin */}
            <Route exact path = "/MedicalStaff" element = {<ViewAdminHomePage />}/>
            <Route exact path = "/MedicalStaffViewDoctors" element = {<FetchDoctor/>} /> 
            <Route exact path = "/MedicalStaffviewPatients" element = {<FetchPatient/>} />
            <Route exact path = "/MedicalStaffUpdateDoctor/:id" element = {<UpdateDoctor/>} />
            <Route exact path = "/MedicalStaffAddDoctor" element = {<AddDoctor/>} />
            <Route exact path = "/MedicalStaffViewDoctorNurses/:id" element = {<FetchNurseOfDoctor/>} />
            <Route exact path = "/MedicalStaffViewNurses" element = {<FetchNurse/>} />
            <Route exact path = "/MedicalStaffUpdateNurse/:id" element = {<UpdateNurse/>} />
            <Route exact path = "/MedicalStaffAddNurse" element = {<AddNurse/>} />
            <Route exact path = "/MedicalStaffViewNursesForAssignment/:id" element = {<FetchNursesForAssign/>} />
            {/* Doctor */}
            <Route exact path = "/Doctor/:id" element = {<ViewDoctorHomePage />}/>
            <Route exact path = "/DoctorViewPatients/:id" element = {<FetchPatientUnderGuide/>} /> 
            <Route exact path = "/DoctorViewPatientDeclaration/:id" element = {<ViewOnePatientDeclaration/>} />
            <Route exact path = "/DoctorAddAdvice/:id" element = {<MakeAdvice/>} />
            <Route exact path = "/DoctorViewRequestAppointment" element = {<FetchRequestAppointment/>} />
            <Route exact path = "/DoctorViewUpcomingAppointment" element = {<FetchUpcomingAppointmentsForDoctor/>} />
            <Route exact path = "/DoctorInitiateAppointment" element = {<InitiateAppointment/>} />
            {/* <Route exact path = "/DoctorViewNurses" element = {<InitiateAppointment/>} /> */}
            <Route exact path = "/DoctorViewPatientTreatment/:id" element = {<ViewPatientTreatmentCourse/>} />
            <Route exact path = "/ViewDeclarationOnTreatCourse/:id" element = {<ViewPatientDeclarations/>} />
            {/* Nurse */}
            <Route exact path = "/Nurse/:id" element = {<ViewNurseHomePage />}/>
            <Route exact path = "/NurseViewPatients/:id" element = {<FetchPatientForNurse />}/>
            <Route exact path = "/NurseViewPatientDeclaration/:id" element = {<NurseViewOnePatientDeclaration />}/>
            <Route exact path = "/NurseAddHealthDeclaration/:id" element = {<NurseAddHealthDeclaration />}/>
            {/* Patient */}
            <Route exact path = "/Patient/:id" element = {<ViewPatientHomePage />}/>
            <Route exact path = "/PatientUpdateInfo/:id" element = {<UpdatePatientInformation/>} /> 
            <Route exact path = "/PatientViewDoctors" element = {<FetchDoctorList/>} /> 
            <Route exact path = "/PatientViewHealthInfo/:id" element = {<FetchList/>} />
            <Route exact path = "/PatientAddHealthInfo/:id" element = {<AddHealthDeclaration/>} />
            <Route exact path = "/PatientUpdateHealthInfo/:id" element = {<UpdateHealthDeclaration/>} />
            <Route exact path = "/PatientViewInitiatedAppointment" element = {<FetchInitiatedAppointment/>} />
            <Route exact path = "/PatientViewUpcomingAppointment" element = {<FetchUpcomingAppointmentsForPatient/>} />
            <Route exact path = "/PatientRequestAppointment" element = {<RequestAppointment/>} />
            {/*HomePage*/}
          </Route>
          <Route path = "*" element = {<NotFoundError/> } />
          {/* <Route exact path = "/update/Song/:id" element = {< UpdateSongInfo/>}/> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
