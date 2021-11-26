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
          <Question {...props} diff={diff} currQ={currQ} setCurrQ={setCurrQ} />
          )}
        />

        <Route
          path='/score'
          exact
          render={(props) => (
          <Score  />
          )}
        />
        <Redirect to = "/" />
      </Switch>
    </div>
  );
}

export default App;
