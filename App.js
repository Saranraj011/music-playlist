import React,{useState,useEffect} from "react";
function App() {
  const [notes, setNotes] = useState([]); 
  const [note, setNote] = useState("");
  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  
  const addNote = () => {
    if (!note.trim()) return;
    const newNote = { id: Date.now(), text: note };
    setNotes([...notes, newNote]);
    setNote(""); 
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((n) => n.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div style={containerStyle}>
      <h2>📝 Notes App</h2>
      <textarea
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={textAreaStyle}
      />
      <button onClick={addNote} style={buttonStyle}>Add Note</button>


       <div style={notesContainer}>
        {notes.map((n) => (
          <div key={n.id} style={noteStyle}>
            <p>{n.text}</p>
            <button onClick={() => deleteNote(n.id)} style={deleteButtonStyle}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}
 
const containerStyle = { textAlign: "center", marginTop: "50px" };
const textAreaStyle = { width: "80%", height: "100px", padding: "10px", fontSize: "16px", margin: "10px 0" };
const buttonStyle = { padding: "10px 20px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };
const notesContainer = { display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" };
const noteStyle = { background: "#f9f9f9", padding: "10px", margin: "10px", borderRadius: "5px", width: "200px", textAlign: "left", position: "relative" };
const deleteButtonStyle = { position: "absolute", top: "5px", right: "10px", background: "red", color: "white", border: "none", cursor: "pointer" };


// const contStyle={
//   textAlign:"center",
//   heigth:"100vh",
//   display:"flex",
//   justifyContent:"center",
//   alignItems:"center",
//   flexDirection:"colum",
//   transition:"backgroung-color 0.5s ease"
// };

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

// const inputStyle = { 
//   padding: "10px", 
//   fontSize: "16px",
//    width: "300px",
//    margin: "10px",
//    border: "1px solid #ccc",
//    borderRadius: "5px",
//    textAlign:"center" 
//   }; 

//   const qrStyle ={
//     marginTop:"20px",
//     border:"1px solid #ddd",
//     padding:"10px",
//     borderRadius:"5px"
//   };
// const jokeStyle = { 
//   marginTop: "20px", 
//   padding: "10px", 
//   border: "1px solid #ccc", 
//   borderRadius: "5px", 
//   display: "inline-block" 
// };


export default App;