import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API } from '../../api/GeneralAPI';
function DoctorList({filteredDoctors}) {
    let navigate = useNavigate()
    const filtered = filteredDoctors
    console.log(filtered)
    const [dataLimit, setDataLimit] = useState(12)
    const numberOfDoctors = filtered.length
    const pageLimit = Math.ceil(numberOfDoctors/dataLimit)
    const [pages] = useState(Math.floor(numberOfDoctors / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    const handleBack=()=>{
        const user_id = localStorage.getItem('user_id')
        navigate('/Patient/'+ user_id)
    }
    const handleRegister = async (id) => {
        const formData = new FormData()
        const token = localStorage.getItem('token')
        const patient_id = localStorage.getItem('patient_id')
        const user_id = localStorage.getItem('user_id')
        const s = API + "newRegisterDoctor";
        console.log(id)
        console.log(patient_id)
        formData.append('chosen_doctor', id);
        formData.append('id', patient_id);
        const config = {
            method : 'put',
            url : s,
            headers: {  
                'Authorization' : `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
            data :formData
        }
        await axios(config).then(function(response){
            console.log(JSON.stringify(response.data));
            navigate('/Patient/'+ user_id)
        }).catch(function(error){
            console.log(error)
            alert(error);
            navigate('/Patient/'+user_id)
        })
    } 
    function goToNextPage() {

        setCurrentPage((page) => page + 1);

     }
   
     function goToPreviousPage() {

        setCurrentPage((page) => page - 1);

     }
   
     function changePage(event) {

        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);

     }
   
     const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return filtered.slice(startIndex, endIndex);
     };
   
     const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);

      };
    const handleDecreaseSongLimit = () => {
        setDataLimit( prevState => prevState - 1)
    }

    const handleIncreaseSongLimit = () => {
        setDataLimit( prevState => prevState + 1)
    }
    return (
        <div>
            <div className = 'rows'>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Work place</th>
                        </tr>
                    </thead>
                    <tbody>
{
                            getPaginatedData().map(f =>
                            
                                <tr key ={f.id}>
                                    {/* <td>{f.id}</td> */}
                                    <td>{f.name}</td>
                                    <td>{f.phone}</td>
                                    <td>{f.email}</td>
                                    <td>{f.work_place}</td>
                                    <td>
                                        <button onClick = {() => handleRegister(f.id)}>Register</button>
                                    </td>

                                </tr>
                                
                            )
                        }

                        <tr>
                            <td>
                                Number of result Doctors: {numberOfDoctors}
                            </td>
                            <td>
                            <button
                                disabled = {(currentPage === 1)}
                                onClick={goToPreviousPage}
                                className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
                                    Prev
                            </button>
                            {getPaginationGroup().map((item, index) => (
                            <button
                                key={index}
                                onClick={changePage}
                                className={`paginationItem ${currentPage === item ? 'active' : null}`}>
                                <span>{item}</span>
                            </button>
                            
                            ))}
                            <button
                            disabled = {(currentPage === pageLimit)}
                            onClick={goToNextPage}
                            className={`next ${currentPage === pages ? 'disabled' : ''}`}>
                                Next
                            </button>
                            </td>
                            <td>
                                Set Doctor Record Limit: 
                                    <button disabled = {dataLimit === 1} onClick = {e => handleDecreaseSongLimit()}>
                                        -
                                    </button> 
                                    {dataLimit}
                                    <button disabled = {dataLimit === numberOfDoctors} onClick = {e => handleIncreaseSongLimit()}>
                                        +
                                    </button> 
                            </td>
                            <td>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick = {()=>handleBack()}>Back</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DoctorList;