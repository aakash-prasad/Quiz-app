import { withRouter } from "react-router";
import './Score.css'
const Score = () =>{
  return(
    <>
      <div className="FinalScore">
        <h1 className="Score">You Scored: </h1>
        <h2>3/4</h2>
      </div>
    </>
  );
}

export default withRouter(Score);