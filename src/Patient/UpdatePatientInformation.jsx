import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../api/GeneralAPI';
function UpdatePatientInformation() {
    const [name, setName] = useState("")
    const [id_num, setId_Num] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const {id} = useParams()
    let navigate = useNavigate()
    console.log(id)
    const handleBack = () => {
        const patient_id = localStorage.getItem('user_id')
        navigate('/Patient/'+ patient_id)
    }
    const onSubmit = async () => {
            const s = API + 'patientUpdate'
            // const data = JSON.stringify({
            //   "id": id,
            //   "name": name,
            //   "author": author,
            //   "genre": genre
            // });
            const token = localStorage.getItem('token')
            const formData = new FormData()
            formData.append('id', id)
            formData.append('name', name)
            formData.append('id_num', id_num)
            formData.append('phone', phone)
            formData.append('city', city)
            formData.append('district', district)
            const config = {
              method: 'put',
              url: s,
              headers: {
                Authorization: `Bearer ${token}`
              },
        
              data : formData
            };
            await axios(config).then(function (response) {
              console.log(JSON.stringify(response.data));
              alert("Update successfully");
              const patient_id = localStorage.getItem('patient_id')
              navigate('/PatientViewHealthInfo/'+patient_id)
            //   window.location.reload()
            })
            .catch(function (error) {   
              console.log(error);
              alert('Something went wrong, please check your input')
            console.log('Something went wrong, please check your input')    
            });
          }
    return ( 
        <div>
            
        </div>
    </div> );
}

export default UpdatePatientInformation;