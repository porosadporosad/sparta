import { useState } from "react";
import "./App.css";

function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let tempResult = "";

    array.forEach(function (fruit, index) {
      tempResult += `${index} : ${fruit}, `;
    });

    tempResult = tempResult.slice(0, -2);
    setResult(tempResult);
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      if (fruit.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });

    setResult(mappedList.join(", "));
  };

  const handleReduce = () => {
    const reducedList = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResult(reducedList);
  };

  const handlePush = () => {
    if (!query) {
      alert("값없음");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = () => {
    let arr = [...array];
    let arrSli = arr.slice(1, -1);
    setResult(arrSli.join(", "));
  };

  const handleSplice = () => {
    array.splice(2, 2, "kiwi", "lime");
    setResult(array.join(", "));
  };

  const handleIndexOf = () => {
    let arrInd = array.indexOf(query);
    setResult(arrInd);
  };

  const handleIncludes = () => {
    let arrInc = array.includes(query);
    setResult(arrInc ? "true" : "false");
  };

  const handleFind = () => {
    const arrFin = array.find((item) => {
      return item === query;
    });
    setResult(arrFin ? arrFin : "Not Found");
  };

  const handleSome = () => {
    const arrSom = array.some((item) => {
      return item === query;
    });
    setResult(arrSom ? "true" : "false");
  };

  const handleEvery = () => {
    const arrEve = array.every((item) => {
      return item.length > 5;
    });
    setResult(arrEve ? "true" : "false");
  };

  const handleSort = () => {
    setResult(array.sort().join(", "));
  };

  const handleJoin = () => {
    setResult(array.join(", "));
  };
  return (
    <div>
      <h1>Standard반 배열 API</h1>
      <div>
        <input
          placeholder="Enter text"
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>fliter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <strong>원본배열</strong> : {array.join(", ")}
      </div>
      <div>
        <strong>결과물</strong> : {result}
      </div>
    </div>
  );
}

export default App;
