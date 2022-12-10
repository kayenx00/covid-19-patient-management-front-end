import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';
import { API } from '../../../../api/GeneralAPI';


function List({filteredNurse, doctor}) {
    let navigate = useNavigate()
    const doctor_id = doctor;
    const token = localStorage.getItem('token')
    const filtered = filteredNurse
    console.log(filtered)
    console.log(doctor_id)
    const [dataLimit, setDataLimit] = useState(12)
    const numberOfNurses = filtered.length
    const pageLimit = Math.ceil(numberOfNurses/dataLimit)
    const [checked, setChecked] = useState([])
    const [pages] = useState(Math.floor(numberOfNurses / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    const handleCheckBox = (id) =>{
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if(isChecked){
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    const handleBack = () =>{
        navigate('/MedicalStaffViewDoctors')
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
    const handleAssign = () => {
        const s = API + 'assignNurses'
        const formData = new FormData();
        for(let i = 0; i < checked.length; i++){
            formData.append("id", checked[i])
        }
        formData.append("doctor_id", doctor_id)
        const config = {
            method: 'put',
            url: s,
            headers: { 
            //   'Content-Type': 'application/json', 
              Authorization: `Bearer ${token}`

            },
            data : formData
          };
          axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            // navigate('/')
            window.location.reload()
          })
          .catch(function (error) {
            console.log(error);
            alert('Something went wrong, please check your input')
          });
    }
    return (
        <div>
            {/* <button onClick ={() => handleLogout()}>
                Log out 
                </button> */}
            <div className = 'rows'>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>User_ID</th>
                            <th>Username</th>
                            <th>Work Under Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
{
                            getPaginatedData().map(f =>
                            
                                <tr key ={f.id}>
                                    <td>
                                        <input type="checkbox" 
                                        checked = {checked.includes(f.id)} 
                                        onChange = {() => handleCheckBox(f.id)}/>
                                    </td>
                                    <td>{f.id}</td>
                                    <td>{f.name}</td>
                                    <td>{f.phone}</td>
                                    <td>{f.user_id}</td>
                                    <td>{f.username}</td>
                                    <td>{f.work_under_doctor}</td>
                                </tr>
                                
                            )
                        }

                        <tr>
                            <td>
                                Number of result Nurse: {numberOfNurses}
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
                            <br />
                            <br />
                            Set Nurse Record Limit: 
                                    <button disabled = {dataLimit === 1} onClick = {e => handleDecreaseSongLimit()}>
                                        -
                                    </button> 
                                    {dataLimit}
                                    <button disabled = {dataLimit === numberOfNurses} onClick = {e => handleIncreaseSongLimit()}>
                                        +
                            </button> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick = {() => handleBack()}>
                                    Back
                                </button>
                            </td>
                            <td>
                                <button onClick = {() => handleAssign()}>
                                    Assign
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

export default List;