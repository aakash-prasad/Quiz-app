import React from 'react'
import '../Question/Question.css'
import { data } from '../../data'
import { useEffect } from 'react'
import { withRouter } from 'react-router'
import { useRef } from 'react'
import { useState } from 'react'


const Question = ({diff, history}) => {
  let [Qcounter, setQCounter] = useState(1);
  let nextRef = React.createRef();
  let prevRef = React.createRef();
  let submitRef = React.createRef();
  let [finalQuestions, setFinalQuestions] = useState([{question: "temp"}]);
  let [score, setScore]= useState(0);
  let correctOption = [];
  let [selectedOption, setSelectedOption] = useState([-1,-1,-1,-1]);
  

  const OptionSelect = (e) =>{
    let temp = [...selectedOption];
    temp[Qcounter-1]=e.target.value;
    if(temp.includes(-1)){
      submitRef.current.disabled = true;
      submitRef.current.style.background = "white";
    }else{
      submitRef.current.disabled = false;
      submitRef.current.style.background = "orange";
    }
    setSelectedOption(temp);
    
  }
  
  const SubmitClick = () =>{
    console.log('Hi')
    
    console.log(score);
  }

  const Next =() =>{
    setQCounter(Qcounter+1);
    if(Qcounter>1){
      prevRef.current.disabled = false;
      prevRef.current.style.background = "red";
    }
    if(Qcounter==3){
      nextRef.current.disabled = true;
      nextRef.current.style.background = "white";
    }
    console.log(correctOption);
    console.log(selectedOption)
  }


  const Prev =() =>{
    setQCounter(Qcounter-1);
    if(Qcounter==1){
      prevRef.current.disabled = true;
      prevRef.current.style.background = "white";
    }
    if(Qcounter<4 ){
      nextRef.current.disabled = false;
      nextRef.current.style.background = "green";
    }
  }

  useEffect(() => {
    if(diff==undefined){
      history.push("/");
      return;
    }
    if(Qcounter<1){
      prevRef.current.disabled = true;
      prevRef.current.style.background = "white";
    }
  
    const filteredQuestions = data.filter((q)=>{
      return (q.level.toLowerCase()== diff.toLowerCase());
    })
    ;
    let shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
    shuffled = shuffled.slice(0, 4);
    setFinalQuestions(shuffled) ;
    correctOption = shuffled.map(s=>{
      return (s.correctOption)
    })
    console.log(correctOption)

  }, [diff]);

  return (
    <>
      <div className="QuestionDiv">
        <div className="SingleQuestion">

          <h2>Q: {finalQuestions[Qcounter-1].question} </h2>
          <form onChange={OptionSelect}>
            <input type="radio" value="option1" name="options"></input>
            <label className="option1">{finalQuestions[Qcounter-1].option1}</label><br />
            <input type="radio" value="option2" name="options"></input>
            <label className="option1">{finalQuestions[Qcounter-1].option2}</label><br />
            <input type="radio" value="option3" name="options"></input>
            <label className="option1">{finalQuestions[Qcounter-1].option3}</label><br />
            <input type="radio" value="option4" name="options"></input>
            <label className="option1">{finalQuestions[Qcounter-1].option4}</label><br />
          </form>
        </div>
      </div>
      <div className="buttons">
        
          <button onClick={Prev}  ref={prevRef} className="PreviousButton" value="Previous">Previous</button>
          <button onClick={Next}  ref={nextRef} className="NextButton" value="next">Next</button>
          <button onClick={SubmitClick} disabled style={{background: "white"}} ref={submitRef} className="FinalButton" value="submit">Submit</button>
      </div>
    </>
    
  )
}

export default withRouter(Question);