import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Pokemon from "../pokemon/Pokemon";
import { handler } from "../../helpers/filtersAndSorts";

export default function Pokemons() {
    const {pokemons, sort, filterOrigin} = useSelector((state) => state);
    const [allPokemons, setAllPokemons] = useState([...pokemons]);

    useEffect(()=>{
        const filtered = handler(sort, filterOrigin, pokemons)
        setAllPokemons(filtered)
    },[pokemons, sort, filterOrigin])
    return (
        <div>
            {
                allPokemons.map(pkmn => {
                    return (
                        <Pokemon
                            key={pkmn.id}
                            id={pkmn.id}
                            name={pkmn.name}
                            types={pkmn.types}
                            image={pkmn.image}
                        />
                    )
                })
            }
        </div>
    )
}