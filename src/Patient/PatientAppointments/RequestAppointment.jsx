import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import { API } from '../../api/GeneralAPI';
function RequestAppointment() {
    const [dateValue, setDateValue] = useState(null);
    const [duration, setDuration] = useState(10);
    const [start_time, setStart_time] = useState("")
    let navigate = useNavigate()
    const handleBack = () => {
        const patient_id = localStorage.getItem('user_id')
        navigate('/Patient/'+ patient_id)
    }
    const handleDateUpdate = (e) => {
        const dateValue = e.target.value;
        console.log("dateValue", dateValue);
        setDateValue(dateValue);
    }
    const onSubmit = async (e) => {
            e.preventDefault();
            const s = API + 'requestAppointment'
            const patient_id = localStorage.getItem('patient_id');
            // const doctor_id = localStorage.getItem('doctor_id');
            const token = localStorage.getItem('token')
            const date = dateValue.toString();
            const formData = new FormData()
            formData.append('date', date)
            formData.append('start_time', start_time)
            formData.append('duration', duration)
            formData.append('patient_id', patient_id)
            // formData.append('doctor_id', doctor_id)
            const config = {
              method: 'post',
              url: s,
              headers: {
                Authorization: `Bearer ${token}`
              },
        
              data : formData
            };
            await axios(config).then(function (response) {
              console.log(JSON.stringify(response.data));
              const patient_id = localStorage.getItem('patient_id')

               window.location.reload()
               alert("Request Successfully")
            })
            .catch(function (error) {   
              console.log(error);
              alert('Something went wrong, please check your input')
            console.log('Something went wrong, please check your input')    
            });
          }
    return ( 
    <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Request an Appointment</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                Appointment Date:
                <input                  
                    className="form-control form-control-lg"
                    type="date" onChange={(e) => handleDateUpdate(e)} />

              </div>
              <div className="form-group">
                Appointment Start Time:
                <br />
                <TimePicker
                    placeholder="Select Time"
                    use12Hours
                    showSecond={false}
                    focusOnOpen={true}
                    format="hh:mm A"
                    onChange={e => setStart_time(e.format('LT'))}
      />
              </div>
              <div className="form-group">
                Appointment duration:
              <select
                  defaultValue={duration}
                  onChange={e => setDuration(parseInt(e.target.value), 10)}
                  className="form-control form-control-lg">
                  <option selected value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
              </select>
              </div>
              <span>              
                <button className="btn btn-primary btn-block" onClick = {() => handleBack()}>Back</button>
                <button type = "submit" className="btn btn-primary btn-block">Add</button>
              </span>
            </form>
          </div>
        </div>
    </div> );
}

export default RequestAppointment;