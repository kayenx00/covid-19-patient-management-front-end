import React, { useState, useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';
function DoctorList({filteredDoctor}) {
    let navigate = useNavigate()
    const token = localStorage.getItem('token')
    const filtered = filteredDoctor
    console.log(filtered)
    const [dataLimit, setDataLimit] = useState(6)
    const numberOfDoctors = filtered.length
    const pageLimit = Math.ceil(numberOfDoctors/dataLimit)
    const [checked, setChecked] = useState([])
    const [pages] = useState(Math.floor(numberOfDoctors / dataLimit));
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
    const handleBack = () =>{
        navigate('/Admin')
    }
    const AddDoctor = () =>{
        navigate('/AdminAddDoctor')
    }
    const handleUpdate = (id) => {
        navigate("/AdminUpdateDoctor/" + id)
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
            <button onClick ={() => AddDoctor()}>
                Add Doctor
                </button>
            {/* <button onClick ={() => handleLogout()}>
                Log out 
                </button> */}
            <div className = 'rows'>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>User_ID</th>
                            <th>Username</th>
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
                                    <td>{f.id}</td>
                                    <td>{f.name}</td>
                                    <td>{f.phone}</td>
                                    <td>{f.user_id}</td>
                                    <td>{f.username}</td>
                                    <td>
{/* 
                                        <button onClick={() => goToDetail(f.id)}>
                                            View
                                        </button> */}
                                        <button onClick = {() => handleUpdate(f.id)}>Update</button>

                                    </td>

                                </tr>
                                
                            )
                        }

                        <tr>
                            <td>
                                Number of result Doctor: {numberOfDoctors}
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
                                <button onClick = {() => handleBack()}>
                                    Back
                                </button>
                            </td>

                        </tr>
                        {/* <tr>
                            <td>
                                <button onClick = {() => deleteSongs(checked)}>
                                    Delete
                                </button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DoctorList;