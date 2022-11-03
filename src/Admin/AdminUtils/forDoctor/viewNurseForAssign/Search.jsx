import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import List from './List';
function Search({details, doctor_id}) {
    const doctor = doctor_id
    const [searchField, setSearchField] = useState("")
    const nurses = details
    const navigate = useNavigate()
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
    const handleBack = () => {
        navigate('/AdminViewDoctors')
    }
    function searchList() {
      if(nurses.length === 0){
        return (
          <div>
                <h2 className="text-center mb-4">There are no unassigned Nurse </h2>
                <div className = 'rows'>
                    <table className = "table table-striped table-bordered">
                        <tr>
                            <td>
                                <button onClick={()=>handleBack()}>Back</button>
                            </td>
                        </tr>
                    </table>
                </div>
          </div>
        )
      }else{
        return (

            <List filteredNurse={filterNurses} 
                    doctor = {doctor}/>
        );}
      }
    return ( 
        <div>
            <input 
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type = "search" 
            placeholder = "Search a Nurse" 
            onChange = {handleChange}
            />
            {searchList()}
        </div>
    );
}

export default Search;