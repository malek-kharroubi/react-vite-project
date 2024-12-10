import React, { useEffect, useState } from "react";

function Compteur(props) {
  const [compteur, setCompteur] = useState(0);

  const increment = () => {
    setCompteur(compteur + 1);
  };
  const decriment = () => {
    setCompteur(compteur - 1);
  };

  useEffect(() => {});
  return (
    <div className="compteur">
      <button onClick={increment}>+</button>
      <p className={compteur < 0 && "error"}>{compteur}</p>
      <button onClick={decriment}>-</button>
    </div>
  );
}

export default Compteur;
