import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import "./PokeGrid.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"
    );
    const data = await res.json();
    data.results.forEach((item, index) => {
      item.id = index + 1;
    });
    setPokemons(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="container">
      <div className="pokemons-container">
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon}></PokeCard>
          ))}
      </div>
    </div>
  );
};

export default Home;
