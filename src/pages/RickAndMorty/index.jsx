import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../api/character";

function RickAndMorty() {
  const [conteudo, setConteudo] = useState(<>Carregando...</>);
  async function TransformaEmLista() {
    const todosPersonagens = await getCharacters();

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
            {
              /* {Desafio: traga as participações,    personagem.episode.map()} */
              personagem.episode.map((it) => it.split("/").pop()).join(", ")
              //.pop() pega o ultimo pedaco de cara item do arrey
              //.join() coloca uma virgula para dividir cada item do arrey
            }
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
    <main>
      <nav>
        <Link to="/">
          <button type="button">Home</button>
        </Link>
      </nav>
      <div className="lista-principal">{conteudo}</div>;
    </main>
  );
}

export default RickAndMorty;
