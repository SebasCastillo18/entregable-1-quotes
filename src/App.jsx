import { useState } from "react";
import db from "./db/quotes.json";
import "./App.css";
import QuoteBox from "./components/QuoteBox";

const arrayColors = [
  "#036cfa",
  "#b1e771",
  "#ff9357",
  "#e6435e",
  "#335433",
  "#7ce88f",
  "#ffe857",
  "#0f2943",
  "#7b000b",
  "#b47123",
  "#ffd25e",
  "#17ae82",
  "#ba4c43",
  "#8478ce",
  "#125332",
  "#b94866",
  "#cccc66",
  "#c7b9c5",
  "#f3ddb6",
  "#f9a177",
];

function App() {
  const getRandom = (arrayElements) => {
    const quantityValues = arrayElements.length;
    const randomIndex = Math.floor(Math.random() * quantityValues);

    return arrayElements[randomIndex];
  };

  const [quote, setQuote] = useState(getRandom(db));
  const [color, setColor] = useState(getRandom(arrayColors));
  const newQuote = () => {
    setQuote(getRandom(db));
    setColor(getRandom(arrayColors));
  };

  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox quote={quote} newQuote={newQuote} color={color}></QuoteBox>
    </div>
  );
}

export default App;
