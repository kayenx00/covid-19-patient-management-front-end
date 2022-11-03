import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import ReactLoading from'react-loading';
import NurseHomePage from './NurseHomePage';
import { API } from '../../api/GeneralAPI';
import FetchingError from '../../Authentication/Views/ErrorView/FetchingError';
function ViewNurseHomePage() {
    const {id} = useParams();
    const token = localStorage.getItem('token');
    const url = API + 'getNurseById?id='+id;
    const fetchNurse = async () => {
        let formData = new FormData();
        formData.append('id', id);
        const fetchData = await axios({
            method: 'get',
            url: url,
            headers: {
                Authorization: `Bearer ${token}`},
            data: formData
        })
        return fetchData;
    }
    const query = useQuery('nurse', fetchNurse)
    return ( 
    <div>
        {query.isLoading
        ? <ReactLoading type="spin" color="#0000FF"
        height={100} width={50}/>
        : query.isError
        ? <FetchingError roles = {"Nurse"}/>
        : query.data
        ? <div>
            <NurseHomePage nurseDetails = {query.data.data.object} />
        </div>
        : null}
    </div>
    );
}

export default ViewNurseHomePage;