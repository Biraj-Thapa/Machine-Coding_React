import { useState } from "react";
import Header from "./component/Header";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("kalu");
  const [results, setResults] = useState([]);
  const [showResults,setShowresults]=useState(false)

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input );
    const json = await data.json();
    setResults(json?.recipes);
  };
  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div>
      <Header />
      <div>
        <input
          type="text"
          placeholder="Enter Your input here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={()=>setShowresults(true)}
          onBlur={()=>setShowresults(false)}

        />
        {showResults &&<div className="search_bar">
          {results.map((result, id) => (
            <span key={id}>{result.name}</span>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default App;
