import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../../api/GeneralAPI';
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading'
import FetchingError from '../../../Authentication/Views/ErrorView/FetchingError';
import List from './List';
function FetchInitiatedAppointment() {
    const patient_id = localStorage.getItem('patient_id');
    console.log(patient_id)
    const url = API + "getInitiateAppointment?id="+ patient_id;
    const token = localStorage.getItem('token');
    const fetchAppointments = async () => {
        let formData = new FormData();
        // formData.append('doctor_id', doctor_id)
        console.log("ID is: " + formData.get('patient_id'));
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
        ? <FetchingError roles = {"Patient"}/>
        : query.data
        ? <div>
            <List details = {query.data.data.object} />
        </div>
        : null}
        </div>
     );
}

export default FetchInitiatedAppointment;