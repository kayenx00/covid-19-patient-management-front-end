import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SymptomsQuestion() {
    const [questions, setQuestions] = useState([])
    const [evidence, setEvidence] = useState([])
    const [shouldStop, setShouldStop] = useState(false)
    const [gender, setGender] = useState("female")
    const [age, setAge] = useState(35)
    const [text, setText] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [label, setLabel] = useState("")
    const [triageLevel, setTriageLevel] = useState("")
    const [showSubmitButton, setShowSubmitButton] = useState(false)
    const [showInitialQuestions, setShowInitialQuestions] = useState(true)
    const [checked, setChecked] = useState([]);
    useEffect(() => {
      console.log(shouldStop)
    }, [shouldStop])
    useEffect(() => {
      console.log(type)
    }, [type])
      async function sendRequest () {
        setShowInitialQuestions(false)
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
            'Model': 'infermedica-en',
            'Version': 'v5',
            'Content-Type': 'application/json'
          },
          data : data
        }
        await axios(config).then(function (response) {
          console.log(JSON.stringify(response.data))
          if(response.data) {
            setChecked([]);
          }
          console.log(response.data.should_stop);
          setShouldStop(response.data.should_stop)
          if(response.data.question !== null){
            setText(response.data.question.text)
            setQuestions(response.data.question.items)
            setType(response.data.question.type)
            setChecked([])
          } else {
            setQuestions([])
            setShowSubmitButton(true)
          }
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
      let defaultCheck = [];
      questions.forEach((question) => question && defaultCheck.push('none'));
      setChecked(defaultCheck);
      console.log(defaultCheck)
    },[questions])

    const handleResponseSelection = (e, id, index) => {

      if (e.target.value === 'present')
        checked[index] = 'present';
      else 
        checked[index] = 'absent';
        
      const answer = {
        "id" : id,
        "choice_id" : e.target.value
      }
      setEvidence([...evidence, answer])
      // setChecked(true)
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
          'Model': 'infermedica-en',
          'Version': 'v5',
          'Content-Type': 'application/json'
        },
        data : data
      }
      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data))
    
        setDescription(response.data.description)
        setLabel(response.data.label)
        setTriageLevel(response.data.triage_level)
        setShowSubmitButton(false)        
      //   window.location.reload()
      })
      .catch(function (error) {   
        console.log(error);
        alert('Something went wrong, please check your input')
      console.log('Something went wrong, please check your input')    
      });
    }
    const ShowQuestionType = () => {
      var typeDescription = ""
      if(type === "single"){
        typeDescription = "You can only chose and answer one question related, otherwise, the result may be wrong"
      } 
      else if(type === "group_single") {
        typeDescription = "You can only chose and answer one question related, otherwise, the result may be wrong"
      }
      else if(type === "group_multiple") {
        typeDescription = "You can chose and answer any number of questions below"
      }
      return(
        <div>
          <h6 className="text-center mb-4">{text}</h6>
          <h6 className = "text-center mb-4">{typeDescription}</h6>
        </div>
      )
    }
    const ShowSubmitButton = () => {
      return(
        <div className='text-center'>
          <button className = "align-center" onClick = {sendDiagnoseRequest}>Submit</button>
        </div>
      )
    }
    const ShowResult = () => {
      return(
        <div>
          <br />
          <h4>Description: {description}</h4>
          <br />
          <h4>Advice: {label}</h4>
          <br />                
          <h4>Serious level: {triageLevel}</h4>
          <br />
          <div className='text-center'>
            <button onClick = {handleReload}>Answer again</button>
          </div>
      </div>
      )
    }
    const ShowInitialQuestions = () => {
      return(
        <div>
          Select your gender
          <br />
          <select
            defaultValue={gender}
            onChange={e => setGender(e.target.value)}
            className="form-control form-control-lg">
              <option defaultValue ="female">Female</option>
              <option value="male">Male</option>
          </select>          
        </div>
      )
    }

    function handleReload() {
      window.location.reload()
    }
    return ( 
        <div>
          <div className="container">
            <div className="w-75 mx-auto shadow p-5">
              <h2 className="text-center mb-4">Questions to Predict symptoms</h2>
              {/* { 
                !shouldStop 
                ? <h6 className="text-center mb-4">{text}</h6>
                :<div></div>
              } */}
              { 
                !shouldStop 
                ? <ShowQuestionType />
                : null
              }
              {
                !shouldStop && showInitialQuestions
                ? <ShowInitialQuestions />
                : null
              }
              {
                questions.length > 0 && questions.map((question, index) => (
                  <div id= {question.id}>
                    <div>
                      {question.name}
                      <br />
                      <div>
                      <input 
                        value="present" 
                        onChange = {(e) => handleResponseSelection(e, question.id, index)} 
                        type="radio"
                        name = {question.id}
                        id = {question.id}
                        // name = "dewey"
                        // id = "dewey"
                        checked = {checked[index] === "present"}
                      />
                      <label htmlFor={question.id}>Yes</label>
                      {/* <label htmlFor= "dewey">Yes</label> */}
                    </div>
                      <input 
                        value="absent" 
                        onChange = {(e) => handleResponseSelection(e, question.id, index)} 
                        type="radio" 
                        name= {question.id}
                        id = {question.id}
                        // name = "dewey"
                        // id = "dewey"
                        checked = {checked[index] === 'absent'}
                      />
                      <label htmlFor={question.id}>No</label>
                      {/* <label htmlFor="dewey">No</label> */}
                    </div>
                </div>))
              }
              <div className = "text-center">
                {!shouldStop ? <button className = "align-center" onClick = {sendRequest}>Answer</button> : <div></div>}
              </div>
              <br />
              {description && triageLevel && label ? <ShowResult/> : <div> </div>}
              <br />
              {shouldStop && showSubmitButton ? <ShowSubmitButton/> : null}
              {/* <button disabled = {shouldStop === false} onclick = {sendDiagnoseRequest}>Submit</button> */}
            </div>
          </div>
        </div>
     );
}

export default SymptomsQuestion;