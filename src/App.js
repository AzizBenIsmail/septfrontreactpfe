import logo from "./logo.svg";
import "./App.css";
import Emna from "./Emna";
import React, { useEffect, useState } from "react";

//react-router-dom
function App() {
  //js
  const name = "fawzi";
  const element = <h6>fi 9antra</h6>;

  const etudiant = {
    nom: "Mohamed Aziz",
    prenom: "Ben Ismail",
  };

  function getData(data) {
    return data;
  }

  function getEtudiant(etudiant) {
    return "Hello " + etudiant.nom + " " + etudiant.prenom;
  }

  const listEtudiant = [
    { nom: "Doe", prenom: "Jane", age: "27", objectID: 0 },
    { nom: "Elisa", prenom: "benz", age: "30", objectID: 1 },
  ];

  const inlineStyle = {
    color: "#00ff59",
    FontSize: "26px",
  };

  //const count = 0
  const [count, setCount] = useState(0);

  const [prenom, setPrenom] = useState("Ben Foulen");

  // useEffect(,[count])
  // useEffect(,[])
  // useEffect(,)
  // useEffect(() => {
  //   console.log(count)
  //   console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable count ');
  //   console.log('car le deuxieme argument est count ');
  //   return () => {
  //   console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
  //   }
  //   }, [count])

  // useEffect(() => {
  //   console.log("cette fonction va etre execute une fois seulement ");
  //   console.log("car le deuxieme argument est un tableau vide ");
  //   return () => {
  //     console.log(
  //       " cette partie va etre execute seulement lors de loperation unmounting "
  //     );
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("cette fonction va etre execute chaque re-render");
  //   console.log("car pas de deuxieme argument passer");
  // });
    
  // useEffect(() => {

  //   setTimeout(() => { 
  //     setCount((count) => count + 1); 
  //   }, 1000);
  
  //   }, );
  return (
    <div className="App">
      <header className="App-header">
        {/* jsx */}
        Hello {name}
        {element}
        <div style={inlineStyle}>
          Bonjour {etudiant.nom} {etudiant.prenom}
        </div>
        <hr />
        {getData("test")}
        <hr />
        <div className="inlineStyle">{getEtudiant(etudiant)}</div>
        <hr />
        {listEtudiant.map(function (item) {
          return (
            <div key={item.objectID}>
              Bonjour {item.nom} {item.prenom}
            </div>
          );
        })}
        <hr />
        <Emna etudiant={etudiant} />
        <hr />
        {count}
        <button onClick={() => setCount(count + 1)}>click here +</button>
        <hr />
        {prenom}
        <input
          defaultValue={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
