import { Link } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/all";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to="/">
            <MdCatchingPokemon />
            Pokedex
          </Link>
        </h2>
      </nav>
    </div>
  );
};

export default Navbar;
