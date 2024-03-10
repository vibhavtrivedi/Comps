//import { useState } from "react";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
//import UseCounter from "../hooks/use-counter";
const INCREAMENT_COUNT = 'increament';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const reducer = (state, action) => {
  switch (action.type) {
    case INCREAMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        value: action.payload 
      }
    default:
      return state
  }
}
function CounterPage({ initialValue }) {
  const [state, dispatch] = useReducer(reducer, {count: initialValue, value: 0})
  //const { count, increament } = UseCounter(initialValue);
  // const [count, setCount] = useState(initialValue);
  // const [value, setValue] = useState(0);
  const decreament = () => {
    
  }

  const increament = () => {
    dispatch({
      type: INCREAMENT_COUNT
    });
  }

  
  const handleChange = (event) => {
    const vlue1 = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: vlue1
    })
    //setValue(vlue1)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + value);
    // setValue(0);
  }
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is : {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increament}>Increament</Button>
        <Button onClick={decreament}>Decreament</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a number</label>
        <input value={state.value || ""} className="p-1 m-3 bg-gray-50 border border-gray-300" type="number" onChange={handleChange}/>
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
