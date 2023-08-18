import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../../redux/actions";
import { useNavigate } from "react-router-dom"

const Form = () => {
    const types = useSelector((state) => state.types);
    const dispatch = useDispatch()

    const [aux, setAux] = useState('')

    const [pokemon, setPokemon] = useState({
        name: '',
        image: '',
        health: '',
        attack: '',
        defense: '',
        types: [],
        dueño: ''
    })

    const handleChange = (event) => {
        setPokemon({
            ...pokemon,
            [event.target.name]: event.target.value
        })
    }

    const handleType = (event) => {
        if (!pokemon.types.includes(event.target.value)) {
            setPokemon({
                ...pokemon,
                types: [...pokemon.types, event.target.value]
            })
            setAux(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleCreate = async () => {
        try {
            const res = await dispatch(createPokemon(pokemon)) 
            
        } catch (error) {
            return error.message
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={pokemon.name} onChange={handleChange} />

                <label htmlFor="image">Image: </label>
                <input type="text" name="image" value={pokemon.image} onChange={handleChange} />

                <label htmlFor="healt">Health: </label>
                <input type="text" name="health" value={pokemon.health} onChange={handleChange} />

                <label htmlFor="attack">Attack: </label>
                <input type="text" name="attack" value={pokemon.attack} onChange={handleChange} />

                <label htmlFor="defense">Defense: </label>
                <input type="text" name="defense" value={pokemon.defense} onChange={handleChange} />

                <label htmlFor="dueño">Dueño </label>
                <input type="text" name="dueño" value={pokemon.dueño} onChange={handleChange} />

                <label htmlFor="types">Types: </label>
                <select name="types" id="type" value={aux} onChange={handleType}>
                    {
                        types.map(el => {
                            console.log(types)
                            return (
                                <option value={el.name} key={el.id}>{el.name}</option>
                            )
                        })
                    }
                </select>

                <button onClick={handleCreate}>CREAR POKEMON</button>
            </form>
        </div>
    )
}

export default Form;