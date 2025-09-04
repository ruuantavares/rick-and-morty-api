import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RickAndMorty from "./pages/RickAndMorty";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RickAndMorty" element={<RickAndMorty />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
