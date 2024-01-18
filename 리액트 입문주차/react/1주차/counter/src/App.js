import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const onclickBtnP = () => {
    setNum(num + 1);
  }
  const onclickBtnM = () => {
    setNum(num - 1);
  }
  return (
    <div>
      <p>{num}</p>
      <button onClick={onclickBtnP}>+1</button>
      <button onClick={onclickBtnM}>-1</button>
    </div>
  );
}

export default App;
