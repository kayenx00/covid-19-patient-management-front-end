import React, { useState, useEffect } from 'react';
import DoctorList from './DoctorList';
function SearchDoctor({details}) {
    const [searchField, setSearchField] = useState("")
    const doctors = details
    console.log(doctors);
    const filterDoctors = doctors.filter(
        doctor => {
          return (
            // doctor
            // .id
            // .toLowerCase()
            // .includes(searchField.toLowerCase()) ||
            doctor
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase())
            ||
            doctor
            .username
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );
    const handleChange = (e) =>{
        setSearchField(e.target.value);
    }
    function searchList() {
      if(doctors.length === 0){
        return (
          <div>
            
          </div>
        )
      }else{
        return (

            <DoctorList filteredDoctor={filterDoctors} />
        );}
      }
    return ( 
        <div>
            <input 
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type = "search" 
            placeholder = "Search a Doctor" 
            onChange = {handleChange}
            />
            {searchList()}
        </div>
    );
}

export default SearchDoctor;