import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { useQuery } from 'react-query';
import { API } from '../../../api/GeneralAPI';
import FetchingError from '../../../Authentication/Views/ErrorView/FetchingError';
import SearchPatientUnderGuide from './SearchPatientUnderGuide';
function FetchPatientUnderGuide() {
    const {id} = useParams();
    console.log(id)
    const url = API + "getAllPatientsOfDoctor?id="+ id;
    const token = localStorage.getItem('token');
    const fetchPatients = async () => {
        let formData = new FormData();
        formData.append('id', id)
        console.log("ID is: " + formData.get('id'));
        console.log(`Bearer ${token}`)
        const fetchData = await axios({
            method: 'get',
            url: url,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data : formData})
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
            <SearchPatientUnderGuide details = {query.data.data.object} />
        </div>
        : null}
        </div>
     );
}

export default FetchPatientUnderGuide