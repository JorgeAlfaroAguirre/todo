import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <button onClick={handleClick}>+1</button>
      <p>{count}</p>
    </>
  );
}

export default App;
