import React, { useState, useEffect } from 'react';
import DoctorList from './DoctorList';
function SearchDoctor({details}) {
    const [searchField, setSearchField] = useState("")
    const doctors = details
    console.log(doctors);
    const filteredDoctors = doctors.filter(
        doctor => {
          return (
            doctor
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase())
            ||   
            doctor
            .phone
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
            <h2 className='text-center'> There are no Doctors available</h2>
          </div>
        )
      }
      else{
        return (
            <DoctorList filteredDoctors={filteredDoctors} />
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

export default SearchDoctor;