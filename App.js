import React,{useEffect, useState} from "react";

function App(){
  const [text,setText]=useState("");
  const [qrCode,setQRCode]=useState("");

  const generateQRCode = () => {
    if (text.trim()==="") return;
    setQRCode(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`);
  };

  return (
    <div style={contStyle}>
      <h2>QR Code Generator</h2>
      <input type="text" placeholder="Enter Text or URL"  value={text} onChange={(e) => setText(e.target.value)} style={inputStyle}></input>
       <button onClick={generateQRCode} style={btnStyle}>Generator</button>

       
   {qrCode &&(
  <div>
    <img src={qrCode} alt="QR Code" style={qrStyle}/>
    <p>{text}</p>
  </div>
   )
  }
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

  const qrStyle ={
    marginTop:"20px",
    border:"1px solid #ddd",
    padding:"10px",
    borderRadius:"5px"
  };
// const jokeStyle = { 
//   marginTop: "20px", 
//   padding: "10px", 
//   border: "1px solid #ccc", 
//   borderRadius: "5px", 
//   display: "inline-block" 
// };


export default App;