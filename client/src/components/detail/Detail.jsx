import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getPokeById, cleanDetail} from '../../redux/actions'

const Detail = () =>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokeDetail = useSelector(state => state.pokemonDetail)

    useEffect(()=>{
        dispatch(getPokeById(id))
        return () => dispatch(cleanDetail())
    },[id])

    return (
        <div>
            <h1>Name: {pokeDetail.name}</h1>
            <img src={pokeDetail.image}/>
            <h2>Types: {pokeDetail?.types?.map((type) => type.name).join(" - ")}</h2>
            <h2>Attack: {pokeDetail.attack}</h2>
            <h2>Defense: {pokeDetail.defense}</h2>
            <h2>Health: {pokeDetail.health}</h2>

        </div>
    )
}

export default Detail;