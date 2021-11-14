import React from 'react';
import { useReducer } from 'react';
import {reducer, initialState} from './reducers/index';
import {applyNumber, changeOperation, clearDisplay, currentMemory, addMemory, resetMemory} from './actions/index'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleNumbers = (number) => {
    dispatch(applyNumber(number))
  }

  const handleOperator = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleClearDisplay = () => {
    dispatch(clearDisplay(0))
  }

  const handleCurrentMemory = () => {
    dispatch(currentMemory(state.total))
  }

  const handleAddMemory = () => {
    dispatch(addMemory(state.memory))
  }

  const handleResetMemory = () => {
    dispatch(resetMemory(0))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleCurrentMemory}/>
              <CalcButton value={"MR"} onClick={handleAddMemory}/>
              <CalcButton value={"MC"} onClick={handleResetMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => {handleNumbers(1)}}/>
              <CalcButton value={2} onClick={() => {handleNumbers(2)}}/>
              <CalcButton value={3} onClick={() => {handleNumbers(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => {handleNumbers(4)}}/>
              <CalcButton value={5} onClick={() => {handleNumbers(5)}}/>
              <CalcButton value={6} onClick={() => {handleNumbers(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {handleNumbers(7)}}/>
              <CalcButton value={8} onClick={() => {handleNumbers(8)}}/>
              <CalcButton value={9} onClick={() => {handleNumbers(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {handleOperator('+')}}/>
              <CalcButton value={"*"} onClick={() => {handleOperator('*')}}/>
              <CalcButton value={"-"} onClick={() => {handleOperator('-')}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {handleClearDisplay(0)}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
