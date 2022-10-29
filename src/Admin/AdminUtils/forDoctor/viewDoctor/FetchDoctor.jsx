import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading'
import { API } from '../../../../api/GeneralAPI';
import FetchingError from '../../../../Authentication/Views/ErrorView/FetchingError';
import SearchDoctor from './SearchDoctor';
function FetchDoctor() {
    const token = localStorage.getItem('token');
    const url = API + 'getAllDoctors';

    const fetchDoctors = async () => {
        const fetchData = await axios({
            method: 'get',
            url: url,
            headers: {
                Authorization: `Bearer ${token}`

        }})
        return fetchData;
    }
    const query = useQuery('songs', fetchDoctors)
    return ( 
        <div>
        {query.isLoading
        ? <ReactLoading type="spin" color="#0000FF"
        height={100} width={50}/>
        : query.isError
        ? <FetchingError roles = {"Admin"}/>
        : query.data
        ? <div>
            <SearchDoctor details = {query.data.data.object} />
        </div>
        : null}
        </div>
    );
}

export default FetchDoctor;