import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function DoctorList({filteredDoctors}) {
    let navigate = useNavigate()
    const filtered = filteredDoctors
    console.log(filtered)
    const [dataLimit, setDataLimit] = useState(6)
    const numberOfDoctors = filtered.length
    const pageLimit = Math.ceil(numberOfDoctors/dataLimit)
    const [pages] = useState(Math.floor(numberOfDoctors / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    const handleBack=()=>{
        const doctor_id = localStorage.getItem('user_id')
        navigate('/Doctor/'+ doctor_id)
    }
    const handleView = (id) => {
        localStorage.setItem('patient_id', id)
        navigate("/DoctorViewPatientDeclaration/" + id)
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
                            <th>ID</th>
                            <th>Name</th>
                            <th>ID Number</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>District</th>
                        </tr>
                    </thead>
                    <tbody>
{
                            getPaginatedData().map(f =>
                            
                                <tr key ={f.id}>
                                    <td>{f.id}</td>
                                    <td>{f.name}</td>
                                    <td>{f.id_num}</td>
                                    <td>{f.phone}</td>
                                    <td>{f.city}</td>
                                    <td>{f.district}</td>
                                    <td>
                                        <button onClick = {() => handleView(f.id)}>View Patient Declaration</button>
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