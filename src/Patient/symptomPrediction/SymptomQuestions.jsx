import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SymptomsQuestion() {
    const [question, setQuestion] = useState([])
    const [evidence, setEvidence] = useState([])
    const [gender, setGender] = useState("male")
    const [age, setAge] = useState(35)
    useEffect(()=>{
        console.log(question);
        questions();
      },[question])
    const sendRequest = async () => {
        const data = JSON.stringify({
          "sex": gender,
          "age": age,
          "evidence": evidence
        });
        const config = {
          method: 'post',
          url: 'https://api.infermedica.com/covid19/diagnosis',
          headers: {
            'App-Id': '6ff81c4d', 
            'App-Key': '7099c8d79ae438617467b111568649bf', 
            'Content-Type': 'application/json'
          },
    
          data : data
        }
        await axios(config).then(function (response) {
          console.log(JSON.stringify(response.data))
          setQuestion(response.data.question.items)
          console.log(response.data.question.items)
          console.log(question)
        //   window.location.reload()
        })
        .catch(function (error) {   
          console.log(error);
          alert('Something went wrong, please check your input')
        console.log('Something went wrong, please check your input')    
        });
    }
    function questions () {
       console.log(question)

       return(
        <div>
                <h1>Chao</h1>
                {question.map(m => {
                    // <div className="form-group">
                    //     {m.name}
                    //         <input
                    //             ype="text"
                    //             className="form-control form-control-lg"
                    //             placeholder="Fill your Blood Pressure"
                    //             name="blood_pressure"
                    //             value={question}
                    //             onChange={e => setQuestion(e.target.value)}
                    //               />
                    //             </div>
                })}
                    
        </div>
       )
 
    }
    return ( 
        <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Questions to Predict symptoms</h2>
                {questions()}
                <button onClick = {()=> sendRequest()}>Submit</button>
          </div>
        </div>
        </div>
     );
}

export default SymptomsQuestion;