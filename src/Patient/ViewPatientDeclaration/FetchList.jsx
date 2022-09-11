import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../api/GeneralAPI';
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading'
import FetchingError from '../../Authentication/Views/ErrorView/FetchingError';
import List from './List';
function FetchList() {
    const {id} = useParams();
    console.log(id)
    const url = API + "viewAllDeclaration?id="+ id;
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
            <List details = {query.data.data.object} />
        </div>
        : null}
        </div>
     );
}

export default FetchList;