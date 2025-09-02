import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

// const mock = [
//   {
//     id: 71,
//     name: "Conroy",
//     status: "Dead",
//     species: "Robot",
//     type: "",
//     gender: "unknown",
//     origin: {
//       name: "Earth (Replacement Dimension)",
//       url: "https://rickandmortyapi.com/api/location/20",
//     },
//     location: {
//       name: "Earth (C-137)",
//       url: "https://rickandmortyapi.com/api/location/1",
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/71.jpeg",
//     episode: ["https://rickandmortyapi.com/api/episode/22"],
//     url: "https://rickandmortyapi.com/api/character/71",
//     created: "2017-11-30T11:35:50.183Z",
//   },
//   {
//     id: 813,
//     name: "Crow Horse",
//     status: "Alive",
//     species: "Robot",
//     type: "Crow Horse",
//     gender: "unknown",
//     origin: {
//       name: "Rick and Two Crows Planet",
//       url: "https://rickandmortyapi.com/api/location/125",
//     },
//     location: {
//       name: "Earth (Replacement Dimension)",
//       url: "https://rickandmortyapi.com/api/location/20",
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/813.jpeg",
//     episode: ["https://rickandmortyapi.com/api/episode/51"],
//     url: "https://rickandmortyapi.com/api/character/813",
//     created: "2021-11-02T14:11:56.442Z",
//   },
// ];

function App() {
  const [conteudo, setConteudo] = useState(<>Carregando...</>);

  async function PegarConteudo() {
   // vai realizar o fetch para a api do rick and morty - usando o AXIOS
   //GET = buscar info
   //POST = adicionar info
   //PUT = altera info
   //DELETE = deletar info
    const requestOptions = {
      method: 'GET'
    }
    
    const response = await fetch(
      'https://rickandmortyapi.com/api/character',
      requestOptions
    )

    if(!response.ok){
      return []
    }
    
    const data = await response.json()
    // data = {info: ()}
    return data.results
    // return mock;
  }

  async function TransformaEmLista() {
    const todosPersonagens = await PegarConteudo();

    return todosPersonagens.map((personagem) => (
      <div className="card char" key={personagem.id}>
        <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
        <h2>{personagem.name}</h2>
        <div className="char-info">
          <span>
            <b>Espécie: </b>
            {personagem.species}
          </span>
          <span>
            <b>Gênero: </b>
            {personagem.gender}
          </span>
        </div>

        <div>
          <div className="lista-secundaria">
            <b>Participações: </b>
            {/* {Desafio: traga as participações,    personagem.episode.map()} */}
          </div>
          <div>
            <h5>
              <b>Status: </b> {personagem.status}
            </h5>
          </div>
        </div>
      </div>
    ));
  }
  //função a ser executada, [] =  quando ele vai executar
  useEffect(() => {
    async function Carregar() {
      setConteudo(await TransformaEmLista());
    }
    Carregar();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* filtros */}
        <div className="lista-principal">{conteudo}</div>
      </main>
      <Footer />
    </>
  );
}

export default App;
