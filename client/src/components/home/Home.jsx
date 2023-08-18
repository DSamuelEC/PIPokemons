import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";
import SearchBar from "../searchBar/SearchBar";
import Pokemons from "../pokemons/Pokemons";
import Sort from "../sort/Sort";
import Filters from "../filters/Filters";
import { Link } from 'react-router-dom';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    }, []);

    return (
        <div>
            <button>
                <Link to='/create'>CREATE POKEMON</Link>
            </button>
            <SearchBar />
            <Sort />
            <Filters />
            <hr />
            <h1>POKEMOOONS:</h1>
            <Pokemons />
        </div>
    );
};