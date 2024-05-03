import { useState } from "react"; // Importation de la fonction useState depuis React, permettant de gérer l'état local dans un composant fonctionnel

// Liste initiale d'objets
const initialList = [
  { id: 0, title: "toto", age: 12, mail: "toto@gmail.com" },
  { id: 1, title: "titi", age: 21, mail: "titi@gmail.com" },
  { id: 2, title: "tata", age: 120, mail: "tata@gmail.com" },
];

// Définition du composant List
export default function List() {
  // Utilisation du hook useState pour gérer l'état local de la liste
  const [list, setList] = useState(initialList);

  // Fonction handleClick pour inverser l'ordre des éléments de la liste
  function handleClick() {
    // Création d'une copie de la liste actuelle pour éviter les mutations directes
    const nextList = [...list];
    // Inversion de l'ordre des éléments dans la liste
    nextList.reverse();
    // Mise à jour de la liste avec la nouvelle liste inversée
    setList(nextList);
  }

  // Rendu du composant List
  return (
    <>
      {/* Bouton pour inverser l'ordre de la liste au clic */}
      <button onClick={handleClick}>Inverser</button>
      {/* Affichage de la liste sous forme de liste non ordonnée */}
      <ul>
        {/* Mapping de chaque élément de la liste pour afficher ses propriétés */}
        {list.map((artwork) => (
          <li key={artwork.id}>
            {/* Affichage des propriétés de chaque élément */}
            {artwork.title}, {artwork.age}, {artwork.mail}
          </li>
        ))}
      </ul>
    </>
  );
}
