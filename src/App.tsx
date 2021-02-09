import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File|null>(null);
  const [picture, setPicture] = useState<string>();

  const onChangePicture = (e: any) => {
    setPicture(URL.createObjectURL(e.target.files[0]) );
};

  useEffect(()=>{

    console.log(selectedFile);
    console.log(picture)

  },[selectedFile])

  return (
    <div className="App">
      <header className="App-header">
       <h1>Test de file input sur iOs</h1>
       <img src={picture && picture} alt="" className="image"/>
       <h3>Entrez un fichier (une image)</h3>
       <input type="file" name="fichier" id="fichier" accept=".png, .gif, .jpg, .jpeg, .webp"
       onChange={(e : any ) => {setSelectedFile(e.target.files[0])
      onChangePicture(e)
      }}
       />
      </header>
    </div>
  )
}

export default App
