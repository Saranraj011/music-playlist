import React,{useState} from "react";

function App(){
  const [name,setName]=useState("");
  const [age,setAge] =useState("");
  const [submitted,setSubmitted] =useState(false);
  
  const handleSubmit =(e)=> {
    e.preventDefault();
    setSubmitted(true);
  };
  

  return (
    <div style={conStyle}>
      <h2>User Input</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
        type="text"
        placeholder="Enter your Name" 
        value={name}
        required
        onChange={(e)=>setName(e.target.value)}
        style={inputStyle}
        />

<input
        type="number"
        placeholder="Enter your Age" 
        value={age}
        required
        onChange={(e)=>setAge(e.target.value)}
        style={inputStyle}
        />

      <button type="submit" style={btnStyle}>submit</button>

      </form>

      {submitted && (
        <div style={outputStyle}>
        <h3>Submitted Data</h3>
        <p><strong>Name:</strong>{name}</p>
        <p><strong>Age:</strong>{age}</p>
      </div>
      )}
      
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
const formStyle={
  display:"flex",
  flexDirection: "column", 
  alignItems: "center", 
  gap: "10px" 
};

const inputStyle = { 
  padding: "10px", 
  fontSize: "16px",
   width: "200px" 
  };

const outputStyle = { 
  marginTop: "20px", 
  padding: "10px", 
  border: "1px solid #ccc", 
  borderRadius: "5px", 
  display: "inline-block" 
};


export default App;