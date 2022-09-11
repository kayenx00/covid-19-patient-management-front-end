import React, { useState, useEffect } from 'react';
import PatientUnderGuideList from './PatientUnderGuideList';
function SearchPatientUnderGuide({details}) {
    const [searchField, setSearchField] = useState("")
    const patients = details
    console.log(patients);
    const filteredPatients = patients.filter(
        patient => {
          return (
            patient
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase())
            ||
            patient
            .id_num
            .toLowerCase()
            .includes(searchField.toLowerCase())
            ||            
            patient
            .phone
            .toLowerCase()
            .includes(searchField.toLowerCase())
            ||
            patient
            .city
            .toLowerCase()
            .includes(searchField.toLowerCase())
            ||
            patient
            .district
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );
    const handleChange = (e) =>{
        setSearchField(e.target.value);
    }
    function searchList() {
      if(patients.length === 0){
        return(
          <div>
            <h2 className='text-center'> There are no Patients under your Guidence</h2>
          </div>
        )
      }
      else{
        return (
            <PatientUnderGuideList filteredPatients={filteredPatients} />
        );}
      }
    return ( 
        <div>
            <input 
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type = "search" 
            placeholder = "Search Patient" 
            onChange = {handleChange}
            />
            {searchList()}
        </div>
    );
}

export default SearchPatientUnderGuide;