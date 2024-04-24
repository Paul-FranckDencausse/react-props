import { useState } from "react";

const initialList = [
  { id: 0, title: "toto", age: 12, mail: "toto@gmail.com" },
  { id: 1, title: "titi", age: 21, mail: "titi@gmail.com" },
  { id: 2, title: "tata", age: 120, mail: "tata@gmail.com" },
];

export default function List() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>Inverser</button>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>
            {artwork.title},{artwork.age},{artwork.mail}
          </li>
        ))}
      </ul>
    </>
  );
}
