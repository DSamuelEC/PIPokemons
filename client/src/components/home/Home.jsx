import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
import SearchBar from "../searchBar/SearchBar";
import Pokemons from "../pokemons/Pokemons";
import Sort from "../sort/Sort";
import Filters from "../filters/Filters";

export default function Home (){
    const dispatch = useDispatch();

    useEffect (()=>{
        dispatch(getPokemons());
    },[])

    return (
        <div>
            <SearchBar/>
            <Sort/>
            <Filters/>
            <hr />
            <h1>POKEMOOONS:</h1>
            <Pokemons/>
        </div>
    )
}