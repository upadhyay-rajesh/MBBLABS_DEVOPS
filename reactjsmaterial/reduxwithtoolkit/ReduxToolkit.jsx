
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement
  
} from "../store1/counterSlice";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>
      
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
     
    </div>
  );
}
