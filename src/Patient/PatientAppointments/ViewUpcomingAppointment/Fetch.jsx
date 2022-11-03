import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading'
import FetchingError from '../../../Authentication/Views/ErrorView/FetchingError';
import { API } from '../../../api/GeneralAPI';
import List from './List'

function FetchUpcomingAppointmentsForPatient() {
    const patient_id = localStorage.getItem('patient_id');
    console.log(patient_id)
    const url = API + "patientGetUpcomingAppointment?patient_id="+ patient_id;
    const token = localStorage.getItem('token');
    const fetchAppointments = async () => {
        let formData = new FormData();
        formData.append('patient_id', patient_id)
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

export default FetchUpcomingAppointmentsForPatient;