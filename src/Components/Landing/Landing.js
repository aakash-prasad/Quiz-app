import React from 'react'
import '../Landing/Landing.css'
import { useEffect } from 'react'
import { Question } from '../Question/Question'
import { withRouter } from "react-router-dom";


const Landing = ({diff,setDiff, history}) => {

  const SelectDifficulty = (e) =>{
    e.preventDefault();
    console.log('Form Submited')
  }

  const SubmitButton = (e)=>{
    e.preventDefault();
    history.push("./quiz")
  }

  const RadioSelect = async(e) =>{
    await setDiff(e.target.value);
    console.log('log: ',e.target.value )
  }

  useEffect(() => {
    console.log('difficulty: ',diff);
  }, [diff]);

  return (
    <>
      <div className="Container">
        <h1 className="Welcome">Welcome Learner</h1>
        <h2 className="Selection">Please select your difficultyLevel</h2>
        <form className="FormSelect" onSubmit={SelectDifficulty}>
        <div onChange={RadioSelect}>
          <input type="radio" value="easy" name="difficultyLevel" id="difficultyLevelEasy"></input>
          <label className="LabelTag" htmlFor="difficultyLevelEasy" >Easy</label><br />
          <input type="radio" value="medium" name="difficultyLevel" id="difficultyLevelMed"></input>
          <label className="LabelTag" htmlFor="difficultyLevelMed">Medium</label><br />
          <input type="radio" value="hard" name="difficultyLevel" id="difficultyLevelHard"></input>
          <label className="LabelTag" htmlFor="difficultyLevelHard">Hard</label><br />
        </div>
        </form>
        <form   onClick={SubmitButton}>
        <input className="SubmitButton" type="submit" value="Start Test"></input>    
        </form>
      </div>
    </>
  )
}

export default withRouter(Landing);
