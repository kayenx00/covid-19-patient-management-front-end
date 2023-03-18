import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import ReactLoading from 'react-loading'
import { useParams } from 'react-router-dom';
import { API } from '../../../api/GeneralAPI';
import FetchingError from '../../../Authentication/Views/ErrorView/FetchingError';
import List from './List'
function ViewPatientTreatmentCourse() {
    const {id} = useParams();
    const url = API + 'getTreatmentDuration?id='+id;
    const token = localStorage.getItem('token');
    const fetchPatientTreatmentCourse = async () => {
        let formData = new FormData();
        formData.append('id', id);
        const fetchData = await axios({
            method: 'post',
            url: url,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data : formData})
        return fetchData;
    }
    const query = useQuery('treatmentCourse', fetchPatientTreatmentCourse)
    return ( 
        <div>
        {query.isLoading
        ? <ReactLoading type="spin" color="#0000FF"
        height={100} width={50}/>
        : query.isError
        ? <FetchingError />
        : query.data
        ? <div>
            <List treatmentCourse = {query.data.data.object} />
        </div>
        : null}
        </div>
     );
}

export default ViewPatientTreatmentCourse;