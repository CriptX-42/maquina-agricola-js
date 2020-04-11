import React from 'react';
import useKonamiCode from './useKonamiCode';

function App() {
  const { sequence, rightSequence } = useKonamiCode();

  return (
    <div>
      <h1>Maquina Agricola JS</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Konami_Code.svg"
        alt="Konami Code!"
      />

      <p>
        {sequence.map((key, i) => (
          <b key={i}>{key}</b>
        ))}
      </p>
      {rightSequence && (
        <img
          src="https://www.rescuecursos.com/wp-content/uploads/elementor/thumbs/MAQUINA-AGROCOLA-nzdl6g8uqamfdtjqdvex1vz0hinsm6kvjoxrlryor4.jpg"
          alt="MAQUÍNA AGRÍCOLA"
        />
      )}
    </div>
  );
}

export default App;
