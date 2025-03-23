import React,{useState} from "react";

function App(){
  const quotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "This is my life i'm live in my own way"
  ];

  const [quote, setQuote] =useState(quotes[0]);

  const genQuote =()=> {
    const randomIndex =Math.floor(Math.random()*quotes.length);
    setQuote(quotes[randomIndex]);

  };

  return (
    <div style={conStyle}>
      <h2>Random Quotes Generater</h2>
      <h1 style={quoteStyle}>{quote}</h1>

      <button onClick={genQuote} style={btnStyle}>New Quote</button>

    </div>
  );
}
const conStyle={
  textAlign:"center",
  marginTop:"50px",
  padding:"20px"
};
const btnStyle={
  margin:"10px",
  padding:"10px 20px",
  fontSize:"18px",
  cursor:"pointer"
};
const quoteStyle={
  fontSize:"20px",
  fontStyle:"italic",
  marginBottom:"20px"
};

export default App;