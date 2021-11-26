import './App.css';
import Landing from './Components/Landing/Landing';
import { useState } from 'react';
import Question from './Components/Question/Question';
import { data } from './data';
import {Redirect, Switch, Route} from 'react-router-dom';
import Score from '../src/Components/Score/Score'
function App() {

  const[diff, setDiff] = useState()
  const [currQ, setCurrQ]= useState([]);
  let [correctOption, setCorrectOption] = useState([]);
  let [selectedOption, setSelectedOption] = useState([-1,-1,-1,-1]);
  

  // const [correctAns, setCorrectAns] = ([]);
  // const [correctAns, setCorrectAns] = ('');


  return (
    <div className="App">
      <Switch>
      <Route
      path='/'
      exact
      render={(props) => (
        <Landing {...props} diff={diff} setDiff={setDiff} />
      )}
      />
        <Route
          path='/quiz'
          exact
          render={(props) => (
          <Question {...props} diff={diff} currQ={currQ} setCurrQ={setCurrQ} correctOption={correctOption} selectedOption={selectedOption} setSelectedOption={setSelectedOption} setCorrectOption={setCorrectOption} />
          )}
        />

        <Route
          path='/score'
          exact
          render={(props) => (
          <Score  correctOption={correctOption} selectedOption={selectedOption} />
          )}
        />
        <Redirect to = "/" />
      </Switch>
    </div>
  );
}

export default App;
