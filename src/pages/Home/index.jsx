import "./style.css";
import { Link } from "react-router-dom";

function Home() {

  return (
    <>
      <main>
        <nav>
          <Link to="/RickAndMorty">
            <button type="button">Conheça a API</button>
          </Link>
        </nav>
      </main>
      ;
    </>
  );
}

export default Home;
