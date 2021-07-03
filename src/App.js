import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './store/actions/actions'
import { useState } from 'react';



function App() {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.count)



  return (
    <div className="App">
      <button onClick={() => {
        dispatch(increment())
        console.log("count value  ", counter)

      }
      }>+</button>


      {counter}


      <button onClick={() => {
        dispatch(decrement())
        console.log("count value  ", counter)

      }
      }>-</button>
    </div>
  );
}

export default App;
