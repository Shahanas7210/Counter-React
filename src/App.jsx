import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const onIncrement = (pre) => {
    
    setCount((pre) => pre + 1);
  };
  const onDecrement = () => {
    if(count === 0) return;
    setCount((pre) => pre - 1);
  };

  return (
    <div>
      <h1>React simple Counter </h1>
      <Counter
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
}

export default App;
