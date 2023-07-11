import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detalhes.css";

const Detalhes = () => {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  const getAllPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    setPokemon(data);
    console.log(data);
  };

  useEffect(() => {
    getAllPokemon();
  });

  return (
    <div className="container-details">
      <div className="details-img">
        <div>
          <h2>Comum</h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </div>
        <div>
          <h2>Shiny</h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </div>
      </div>
      <div className="details-info">
        <div>
          <h3 className="title-name">{pokemon.name?.toUpperCase()}</h3>
        </div>
        <div>
          <h3>Número:</h3>
          <p>#{pokemon.id?.toString().padStart(3, "0")}</p>
        </div>
        <div>
          <h3>Tipo:</h3>
          <p>
            {pokemon.types?.map((item, id) => (
              <span key={id}>| {item.type.name?.toUpperCase()} |</span>
            ))}
          </p>
        </div>
        <div>
          <h3>Altura:</h3>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div>
          <h3>Peso:</h3>
          <p> {pokemon.weight / 10} Kg</p>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
