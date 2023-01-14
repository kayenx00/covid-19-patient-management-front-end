import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
function SearchPatient() {
    const [id, setId] = useState()
    const [id_num, setId_Num] = useState("")
    const [name, setName] = useState("")
    const [patientList, setPatientList] = useState([])
    const msg = "(Result not found)"
    function searchResult () {
        if(patientList.length === 0){
            return(
                <div>
                    <h4 className='text-center'>{msg}</h4>
                </div>
            )
        }else {
            return(
                <div>
                    <List details = {patientList}></List>
                </div>
            )
        }
    }
    async function sendRequest () {
        let formData = new FormData();
        formData.append('id', id);
        formData.append('id_num', id_num);
        formData.append('name', name);
        const config = {
            method: 'post',
            url: 'http://localhost:8080/api/searchPatient',
            // headers : {
            //     'Content-Type': 'from-data'
            // },
            data : formData
        };

        await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            setPatientList(response.data.object)
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    return ( 
        <div>
            <input 
                className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                type = "search" 
                placeholder = "Search By Patient ID" 
                value = {id}
                onChange = {(e) => setId(e.target.value)}
            />
            <input 
                className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                type = "search" 
                placeholder = "Search By Id Number" 
                value = {id_num}
                onChange = {(e) => setId_Num(e.target.value)}
            />
            <input 
                className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                type = "search" 
                placeholder = "Search By Name" 
                value = {name}
                onChange = {(e) => setName(e.target.value)}
            />

            <button onClick = {sendRequest}>Search</button>
            {searchResult()}
        </div>
     );
}

export default SearchPatient;