import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddPropject() {
    // projects.push(`Novo projeto ${Date.now()}`);

    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />
      <img width={300} src={backgroundImage} />
      <ul>
        {projects.map((project, idx) => <li key={idx}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddPropject}>Adicionar projeto</button>
    </>
  );
}

export default App;