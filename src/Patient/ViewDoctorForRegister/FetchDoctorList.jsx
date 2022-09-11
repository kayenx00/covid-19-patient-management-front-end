import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading'
import { API } from '../../api/GeneralAPI';
import FetchingError from '../../Authentication/Views/ErrorView/FetchingError';
import SearchDoctor from '../../Admin/AdminUtils/forDoctor/viewDoctor/SearchDoctor';
function FetchDoctorList() {
    const url = API + "getAllDoctorsForPatient";
    const token = localStorage.getItem('token');
    const fetchPatients = async () => {
        const fetchData = await axios({
            method: 'get',
            url: url,
            headers: {
                Authorization: `Bearer ${token}`,
            }})
        return fetchData;
    }
    const query = useQuery('patients', fetchPatients)
    return ( 
        <div>
        {query.isLoading
        ? <ReactLoading type="spin" color="#0000FF"
        height={100} width={50}/>
        : query.isError
        ? <FetchingError />
        : query.data
        ? <div>
            <SearchDoctor details = {query.data.data.object} />
        </div>
        : null}
        </div>
     );
}

export default FetchDoctorList;