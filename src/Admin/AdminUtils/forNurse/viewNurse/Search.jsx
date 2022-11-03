import React, { useState, useEffect } from 'react';
import List from './List';
function Search({details}) {
    const [searchField, setSearchField] = useState("")
    const nurses = details
    console.log(nurses);
    const filterNurses = nurses.filter(
        nurse => {
          return (
            // doctor
            // .id
            // .toLowerCase()
            // .includes(searchField.toLowerCase()) ||
            nurse
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase())
            ||
            nurse
            .username
            .toLowerCase()
            .includes(searchField.toLowerCase())
            ||
            nurse
            .work_under_doctor
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );
    const handleChange = (e) =>{
        setSearchField(e.target.value);
    }
    function searchList() {
      if(nurses.length === 0){
        return (
          <div>
            
          </div>
        )
      }else{
        return (

            <List filteredNurse={filterNurses} />
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

export default Search;