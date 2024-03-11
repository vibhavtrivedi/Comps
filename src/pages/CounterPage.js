import { useReducer } from "react";
import { produce } from "immer";
import Button from "../components/Button";
import Panel from "../components/Panel";
const INCREAMENT_COUNT = 'increament';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const DECREAMENT_COUNT = 'decreament';
const ADD_VALUE_TO_COUNT = 'add_value';
const reducer = (state, action) => {
  switch (action.type) {
    case INCREAMENT_COUNT:
      state.count = state.count + 1
      return
    case DECREAMENT_COUNT:
      state.count = state.count - 1
      return 
    case CHANGE_VALUE_TO_ADD:
      state.value = action.payload
      return
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.value
      return
    default:
      return 
  }
}
function CounterPage({ initialValue }) {
  const [state, dispatch] = useReducer(produce(reducer), {count: initialValue, value: 0})
  const decreament = () => {
    dispatch({
      type: DECREAMENT_COUNT 
    })
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
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
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
