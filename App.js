import React,{useState} from "react";

function App(){
  const [count,setCount]=useState(0);

  const increase =()=>setCount(count +5);

  const reset =()=>setCount(0);

  const decrese =()=>setCount(count -5);

  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h2>Simple counter app</h2>
      <h1>{count}</h1>

      <button onClick={increase} style={btnStyle}>+ increase</button>

      <button onClick={reset} style={btnStyle}> reset</button>

      <button onClick={decrese} style={btnStyle}>- decrese</button>
    </div>
  );
}

const btnStyle={
  margin:"10px",
  padding:"10px 20px",
  fontSize:"18px",
  cursor:"pointer"
};

export default App;