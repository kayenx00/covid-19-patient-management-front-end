import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import ReactLoading from'react-loading';
import DoctorHomePage from './DoctorHomePage';
import { API } from '../../api/GeneralAPI';
import FetchingError from '../../Authentication/Views/ErrorView/FetchingError';
function ViewDoctorHomePage() {
    const {id} = useParams();
    const token = localStorage.getItem('token');
    const url = API + 'getDoctorById';
    const fetchSongs = async () => {
        let formData = new FormData();
        formData.append('id', id);
        const fetchData = await axios({
            method: 'put',
            url: url,
            headers: {
                Authorization: `Bearer ${token}`},
            data: formData
        })
        return fetchData;
    }
    const query = useQuery('songs', fetchSongs)
    return ( 
    <div>
        {query.isLoading
        ? <ReactLoading type="spin" color="#0000FF"
        height={100} width={50}/>
        : query.isError
        ? <FetchingError />
        : query.data
        ? <div>
            <DoctorHomePage doctorDetails = {query.data.data.object} />
        </div>
        : null}
    </div>
    );
}

export default ViewDoctorHomePage;