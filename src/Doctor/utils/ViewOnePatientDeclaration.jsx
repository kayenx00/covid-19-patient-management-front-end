import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import ReactLoading from 'react-loading'
import { useParams } from 'react-router-dom';
import { API } from '../../api/GeneralAPI';
import FetchingError from '../../Authentication/Views/ErrorView/FetchingError';
import HealthDeclarationOfPatient from './HealthDeclarationOfPatient';
function ViewOnePatientDeclaration() {
    const {id} = useParams();
    const url = API + 'viewPatientAllDeclaration?id='+id;
    const token = localStorage.getItem('token');
    const fetchPatientDeclaration = async () => {
        let formData = new FormData();
        formData.append('id', id);
        const fetchData = await axios({
            method: 'get',
            url: url,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data : formData})
        return fetchData;
    }
    const query = useQuery('healthDeclaration', fetchPatientDeclaration)
    return ( 
        <div>
        {query.isLoading
        ? <ReactLoading type="spin" color="#0000FF"
        height={100} width={50}/>
        : query.isError
        ? <FetchingError />
        : query.data
        ? <div>
            <HealthDeclarationOfPatient healthDeclaration = {query.data.data.object} />
        </div>
        : null}
        </div>
     );
}

export default ViewOnePatientDeclaration;