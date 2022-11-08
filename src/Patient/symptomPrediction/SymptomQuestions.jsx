import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SymptomsQuestion() {
    const [questions, setQuestions] = useState([])
    const [evidence, setEvidence] = useState([])
    const [shouldStop, setShouldStop] = useState(false)
    const [gender, setGender] = useState("male")
    const [age, setAge] = useState(35)
    const [text, setText] = useState("")
    const [description, setDescription] = useState("")
    const [label, setLabel] = useState("")
    const [triageLevel, setTriageLevel] = useState("")
    useEffect(() => {
      console.log(shouldStop)
    }, [shouldStop])
      async function sendRequest () {
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
          console.log(response.data.should_stop)
          setText(response.data.question.text)
          setShouldStop(response.data.should_stop)
          setQuestions(response.data.question.items)
        })
        .catch(function (error) {   
          console.log(error);
          alert('Something went wrong, please check your input')
        console.log('Something went wrong, please check your input')    
        });
    }

    useEffect(() => {
      console.log(shouldStop)
    }, [shouldStop])  
    useEffect(()=>{
      console.log(text);
      //Questions();
    },[text])
    useEffect(()=>{
      console.log(questions);
      //Questions();
    },[questions])
    const handleResponseSelection = (e, id) => {
      console.log(e.target.value)
      console.log(id)
      const answer = {
        "id" : id,
        "choice_id" : e.target.value
      }
      setEvidence([...evidence, answer])
    }
    useEffect(() => {
      console.log(evidence)
    }, [evidence])
    async function sendDiagnoseRequest () {
      const data = JSON.stringify({
        "sex": gender,
        "age": age,
        "evidence": evidence
      });
      const config = {
        method: 'post',
        url: 'https://api.infermedica.com/covid19/triage',
        headers: {
          'App-Id': '6ff81c4d', 
          'App-Key': '7099c8d79ae438617467b111568649bf', 
          'Content-Type': 'application/json'
        },
        data : data
      }
      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data))
        setDescription(response.data.description)
        setLabel(response.data.label)
        setTriageLevel(response.data.triage_level)
      //   window.location.reload()
      })
      .catch(function (error) {   
        console.log(error);
        alert('Something went wrong, please check your input')
      console.log('Something went wrong, please check your input')    
      });
  }
    function showResult (label, description, triageLevel) {
      if(label !== "" && description !== "" && triageLevel !== "")
      {
        return (
          <div>
            {
              <div>
                <h4>Description: {description}</h4>
                <br />
                <h4>Advice: {label}</h4>
                <br />                
                <h4>Serious level: {triageLevel}</h4>
                <br />
              </div>
            }
          </div>)
      } else {
        return (
          <div></div>
        )
      }
    } 
    return ( 
        <div>
        {/* {Questions(questions)} */}
        {/* {
          questions.length > 0 && questions.map((question, index) => (
          <div id= {index}>
                <div>
                  {question.name}
                  <br />
                  <input 
                    value="absent" 
                    onChange = {(e) => handleResponseSelection(e, question.id)} 
                    type="radio" 
                    id="dewey" 
                    name="drone" 
                  />
                  <label for="absent">No</label>
                </div>
                <div>
                  <input 
                    value="present" 
                    onChange = {(e) => handleResponseSelection(e, question.id)} 
                    type="radio" id="dewey" 
                    name="drone" 
                  />
                  <label for="present">Yes</label>
                </div>
            </div>
          ))
        } */}
          <div className="container">
            <div className="w-75 mx-auto shadow p-5">
              <h2 className="text-center mb-4">Questions to Predict symptoms</h2>
                <h6 className="text-center mb-4">{text}</h6>
              {
                questions.length > 0 && questions.map((question, index) => (
                  <div id= {index}>
                    <div>
                      {question.name}
                      <br />
                      <div>
                      <input 
                        value="present" 
                        onChange = {(e) => handleResponseSelection(e, question.id)} 
                        type="radio" id="dewey" 
                        name="drone" 
                      />
                      <label for="present">Yes</label>
                    </div>
                      <input 
                        value="absent" 
                        onChange = {(e) => handleResponseSelection(e, question.id)} 
                        type="radio" 
                        id="dewey" 
                        name="drone" 
                      />
                      <label for="absent">No</label>
                    </div>
                </div>))
              }
              <button onClick = {sendRequest}>Answer</button>
              <br />
              {showResult(label, description, triageLevel)}
              <br />
              <button disabled = {shouldStop === false} onclick = {sendDiagnoseRequest}>Submit</button>
            </div>
          </div>
        </div>
     );
}

export default SymptomsQuestion;