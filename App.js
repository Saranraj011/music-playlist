import React,{useState} from "react";

function App(){
  const [color,setColor]=useState("");

  return (
    <div style={{...contStyle,backgroundColor:color ||"white"}}>

      <h2>Dynamic color changer</h2>
      
         <input
        type="text"
        placeholder="Enter color e.g red,blue" 
        value={color}
        onChange={(e)=>setColor(e.target.value)}
        style={inputStyle}
        />

        <p>Try colors like  <b>blue,red</b>or HEX value like<b>#ff5733</b></p>

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

// const btnStyle={
//   margin:"10px",
//   padding:"10px 20px",
//   fontSize:"18px",
//   cursor:"pointer"
// };
// const formStyle={
//   display:"flex",
//   flexDirection: "column", 
//   alignItems: "center", 
//   gap: "10px" 
// };

const inputStyle = { 
  padding: "10px", 
  fontSize: "16px",
   width: "300px",
   margin: "10px",
   border: "1px solid #ccc",
   borderRadius: "5px",
   textAlign:"center" 
  }; 

// const outputStyle = { 
//   marginTop: "20px", 
//   padding: "10px", 
//   border: "1px solid #ccc", 
//   borderRadius: "5px", 
//   display: "inline-block" 
// };


export default App;