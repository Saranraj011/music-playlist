import React,{useState,useEffect} from "react";
function App() {
  const [songs, setSongs] = useState([]); 
  const [song, setSong] = useState("");
  
  useEffect(() => {
    const savedSongs = JSON.parse(localStorage.getItem("songs")) || [];
    setSongs(savedSongs);
  }, []);


  useEffect(() => {
    localStorage.setItem("songs", JSON.stringify(songs));
  }, [songs]);

  
  const addSong = () => {
    if (!song.trim()) return;
    const newSong = { id: Date.now(), title: song };
    setSongs([...songs, newSong]);
    setSong(""); 
  };

  const removeSong = (id) => {
    const updatedSongs = songs.filter((s) => s.id !== id);
    setSongs(updatedSongs);
  };

  return (
    <div style={containerStyle}>
      <h2> Music Playlist</h2>
      <input
        type="text"
        placeholder="enter a song"
        value={song}
        onChange={(e) => setSong(e.target.value)}
        style={inputStyle}
      />
      <button onClick={addSong} style={buttonStyle}>Add Note</button>


       <div style={playlistContainer}>
        {songs.map((s) => (
          <div key={s.id} style={songStyle}>
            <p>{s.title}</p>
            <button onClick={() => removeSong(s.id)} style={deleteButtonStyle}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}
 
const containerStyle = { textAlign: "center", marginTop: "50px" };
const inputStyle = { padding: "10px", fontSize: "16px", width: "250px", margin: "10px" };
const buttonStyle = { padding: "10px 20px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };
const playlistContainer = { display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" };
const songStyle = { background: "#f9f9f9", padding: "10px", margin: "10px", borderRadius: "5px", width: "200px", textAlign: "left", position: "relative" };
const deleteButtonStyle = { position: "absolute", top: "5px", right: "10px", background: "red", color: "white", border: "none", cursor: "pointer" };

export default App;