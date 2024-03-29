import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading'
import { useParams } from 'react-router-dom';
import { API } from '../../../../api/GeneralAPI';
import FetchingError from '../../../../Authentication/Views/ErrorView/FetchingError';
import List from './List';
function FetchNurseOfDoctor() {
    const {id} = useParams();
    const url = API + "getNurseOfDoctor?doctor_id="+ id;
    const token = localStorage.getItem('token');
    const fetchAppointments = async () => {
        let formData = new FormData();
        formData.append('doctor_id', id)
        console.log("ID is: " + formData.get('doctor_id'));
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
    const query = useQuery('appointments', fetchAppointments)
    return ( 
        <div>
        {query.isLoading
        ? <ReactLoading type="spin" color="#0000FF"
        height={100} width={50}/>
        : query.isError
        ? <FetchingError roles = {"Medical staff"}/>
        : query.data
        ? <div>
            <List details = {query.data.data.object} />
        </div>
        : null}
        </div>
     );
}

export default FetchNurseOfDoctor;