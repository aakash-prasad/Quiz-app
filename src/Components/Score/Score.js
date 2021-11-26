import { withRouter } from "react-router";
import './Score.css'
import { useEffect, useState } from "react";
const Score = ({correctOption, selectedOption, history}) =>{
  const [score, setScore] = useState(0);

  useEffect(() => {
    if(correctOption.length==0){
      history.push("/");
    }
    console.log(correctOption)
    correctOption.forEach((co, index)=>{
      if(co==selectedOption[index])
        setScore(score+1);
    })
  }, [])

  return(
    <>
      <div className="FinalScore">
        <h1 className="Score">You Scored: </h1>
        <h2>{score}/4</h2>
      </div>
    </>
  );
}

export default withRouter(Score);