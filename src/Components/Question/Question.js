import React from 'react'
import '../Question/Question.css'
import { data } from '../../data'
import { useEffect } from 'react'
import { withRouter } from 'react-router'
import { useRef } from 'react'
import { useState } from 'react'


const Question = ({diff, history, selectedOption, setSelectedOption, correctOption, setCorrectOption}) => {
  let [Qcounter, setQCounter] = useState(1);
  let nextRef = React.createRef();
  let prevRef = React.createRef();
  let firstRef = React.createRef();
  let secondRef = React.createRef();
  let thirdRef = React.createRef();
  let fourthRef = React.createRef();
  let [finalQuestions, setFinalQuestions] = useState([{question: "temp"}]);
  let [showButton, setShowButton] = useState(false);
  let [showPrev, setShowPrev] = useState(false);
  let [showNext, setShowNext] = useState(true);
  
  const OptionSelect = (e) =>{
    let temp = [...selectedOption];
    temp[Qcounter-1]=e.target.value;
    if(temp.includes(-1)){
      setShowButton(false);
    }else{
      setShowButton(true);
    }
    
    setSelectedOption(temp);
    
  }
  
  const SubmitClick = (e) =>{
    e.preventDefault();
    history.push("/score");
  }

  

  const Next =() =>{
    setQCounter(Qcounter+1);
    if(Qcounter >0){
      setShowPrev(true);
    }
    if(Qcounter ==3){
      setShowNext(false);
    }
    firstRef.current.checked = false;
    secondRef.current.checked = false;
    thirdRef.current.checked = false;
    fourthRef.current.checked = false;
  }


  const Prev =() =>{
    setQCounter(Qcounter-1);
    firstRef.current.checked = false;
    secondRef.current.checked = false;
    thirdRef.current.checked = false;
    fourthRef.current.checked = false;
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
    setCorrectOption(shuffled.map(s=>{
      return (s.correctOption)
    }))

  }, [diff]);

  return (
    <>
      <div className="QuestionDiv">
        <div className="SingleQuestion">

          <h2>Q: {finalQuestions[Qcounter-1].question} </h2>
          <form onChange={OptionSelect}>
            <input ref={firstRef} id="opt1" type="radio" value="option1" name="options"></input>
            <label className="option1" htmlFor="opt1">{finalQuestions[Qcounter-1].option1}</label><br />
            <input ref={secondRef} type="radio" value="option2" id="opt2" name="options"></input>
            <label htmlFor="opt2"className="option1">{finalQuestions[Qcounter-1].option2}</label><br />
            <input id="opt3" ref={thirdRef} type="radio" value="option3" name="options"></input>
            <label htmlFor="opt3" className="option1">{finalQuestions[Qcounter-1].option3}</label><br />
            <input id="opt4" ref={fourthRef} type="radio" value="option4" name="options"></input>
            <label htmlFor="opt4" className="option1">{finalQuestions[Qcounter-1].option4}</label><br />
          </form>
        </div>
      </div>
      <div className="buttons">
          {showPrev? <button onClick={Prev} className="PreviousButton" value="Previous">Previous</button>:(null)}
          {showNext?<button onClick={Next} className="NextButton" value="next">Next</button> :(null)}
          {showButton?(<button onClick={SubmitClick} className="FinalButton" value="submit">Submit</button>):(null)}
          
      </div>
    </>
    
  )
}

export default withRouter(Question);