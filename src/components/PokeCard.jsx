/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../pages/PokeGrid.css";
const PokeCard = ({ pokemon }) => {
  return (
    <div className="poke-card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />
      <h3>#{pokemon.id.toString().padStart(3, "0")}</h3>
      <h3>{pokemon.name.replace(/^./, (str) => str.toUpperCase())}</h3>
      <Link to={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div>
  );
};

export default PokeCard;
