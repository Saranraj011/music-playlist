import React,{useEffect, useState} from "react";

function App(){
  const [joke,setJoke]=useState("");
  const [loading,setLoading]=useState(false);

  const fetchJoke = async () => {
   setLoading(true);

   try {
    const response = await fetch("");
    const data = await response.json();
    setJoke(`${data.setup} - ${data.punchline}`);
   } catch (error) {
    setJoke("Oops! Failed to load joke, try again");
   }
   setLoading(false);
  };

  useEffect(()=> {
    fetchJoke();
  },[]);

  return (
    <div style={contStyle}>
      <h2>Random Joke generator using API</h2>
      {loading ?<p>Loading...</p>:<p style={jokeStyle}>{joke}</p>}
       
       <button onClick={fetchJoke} style={btnStyle}>Get New Joke</button>
    </div>
  );
}
const contStyle={
  textAlign:"center",
  heigth:"100vh",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"colum",
  transition:"backgroung-color 0.5s ease"
};

const btnStyle={
  margin:"10px",
  padding:"10px 20px",
  fontSize:"18px",
  cursor:"pointer"
};
const formStyle={
  display:"flex",
  flexDirection: "column", 
  alignItems: "center", 
  gap: "10px" 
};

// const inputStyle = { 
//   padding: "10px", 
//   fontSize: "16px",
//    width: "300px",
//    margin: "10px",
//    border: "1px solid #ccc",
//    borderRadius: "5px",
//    textAlign:"center" 
//   }; 

const jokeStyle = { 
  marginTop: "20px", 
  padding: "10px", 
  border: "1px solid #ccc", 
  borderRadius: "5px", 
  display: "inline-block" 
};


export default App;