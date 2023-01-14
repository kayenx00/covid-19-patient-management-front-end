import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
function List({details}) {
    const patients = details
    console.log(details)
    const [dataLimit, setDataLimit] = useState(12)
    const numberOfPatients = patients.length
    const pageLimit = Math.ceil(numberOfPatients/dataLimit)
    // const [checked, setChecked] = useState([])
    const [pages] = useState(Math.floor(numberOfPatients / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    // const handleCheckBox = (id) =>{
    //     setChecked(prev => {
    //         const isChecked = checked.includes(id);
    //         if(isChecked){
    //             return checked.filter(item => item !== id)
    //         } else {
    //             return [...prev, id]
    //         }
    //     })
    // }
    // const handleBack=()=>{
    //     const doctor_id = localStorage.getItem('user_id')
    //     navigate('/Doctor/'+ doctor_id)
    // }
    // const handleView = (id) => {
    //     localStorage.setItem('patient_id', id)
    //     navigate("/DoctorViewPatientDeclaration/" + id)
    // } 
    // const handleViewTreatment = (id)=> {
    //     localStorage.setItem('patient_id', id)
    //     navigate("/DoctorViewPatientTreatment/" + id)
    // }
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
        return patients.slice(startIndex, endIndex);
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
                            <th>ID</th>
                            <th>Name</th>
                            <th>ID Number</th>
                            <th>Chosen Doctor</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
{
                            getPaginatedData().map(f =>
                            
                                <tr key ={f.id}>
                                    {/* <td>
                                        <input type="checkbox" 
                                        checked = {checked.includes(f.id)} 
                                        onChange = {() => handleCheckBox(f.id)}/>
                                    </td> */}
                                    {/* <td>{f.id}</td> */}
                                    <td>{f.patient_id}</td>
                                    <td>{f.name}</td>
                                    <td>{f.id_num}</td>
                                    <td>{f.chosenDoctor}</td>
                                    <td>{moment(f.startDate).format("YYYY/MM/DD")}</td>
                                    <td>{f.endDate === null ? "Until Now" : moment(f.end_date).format("YYYY/MM/DD")}</td>
                                    {/* <td>
                                        <button onClick = {() => handleView(f.id)}>View Patient Declaration</button>
                                        <br />
                                        <button onClick = {() => handleViewTreatment(f.id)}>View Patient Treatment Duration</button>
                                    </td> */}

                                </tr>
                                
                            )
                        }

                        <tr>
                            <td>
                                Number of result Patients: {numberOfPatients}
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
                                Set Patient Record Limit: 
                                    <button disabled = {dataLimit === 1} onClick = {e => handleDecreaseSongLimit()}>
                                        -
                                    </button> 
                                    {dataLimit}
                                    <button disabled = {dataLimit === numberOfPatients} onClick = {e => handleIncreaseSongLimit()}>
                                        +
                                    </button> 
                            </td>
                            <td>
                            </td>
                            <td></td>
                        </tr>
                        {/* <tr>
                            <td>
                                <button onClick = {()=>handleBack()}>Back</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;