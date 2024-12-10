import { useState } from "react";
import "./App.css";
import Compteur from "./composants/compteur";
import Navbar from "./composants/Navbar";
import Post from "./composants/Post";

function App() {
  const postsList = [
    {
      id: 1,
      titre: "Amani Kaso",
      description:
        "Voici un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 2,
      titre: "Malek Kharroubi",
      description:
        "Ceci est une autre description qui remplace un texte existant",
      liker: false,
    },
    {
      id: 3,
      titre: "Lamia Ben Salah",
      description: "Un autre exemple de texte qui peut être modifié",
      liker: false,
    },
    {
      id: 4,
      titre: "Yassine Jaziri",
      description:
        "Ce texte remplace une section destinée à décrire un élément",
      liker: false,
    },
    {
      id: 5,
      titre: "Sami Gharbi",
      description: "Un exemple de contenu factice pour un objet",
      liker: false,
    },
  ];
  const [posts, setPosts] = useState(postsList);

  const likerPost = (data) => {
    const cloneData = [...posts];
    const index = posts.indexOf(data);
    cloneData[index] = { ...posts[index], liker: !posts[index].liker };
    setPosts(cloneData);
  };

  const deletePost = (id) => {
    const newData = posts.filter((post) => post.id != id);
    setPosts(newData);
  };

  const numbreLike = posts.filter((post) => post.liker);

  return (
    <div className="App">
      <Navbar numbreLike={numbreLike.length} />
      {posts.map((p) => (
        <Post data={p} key={p.id} liker={likerPost} deletePost={deletePost} />
      ))}
    </div>
  );
}

export default App;
