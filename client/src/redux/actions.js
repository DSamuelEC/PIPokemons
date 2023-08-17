import axios from 'axios';
import { GET_ALL_POKEMONS, GET_POKEMON_BY_ID, CLEAN_DETAIL_STATE, GET_BY_NAME, ACTION_ORDER, ACTION_FILTER_ORIGIN } from './action-types';

export const getPokemons = () => {
    return async function(dispatch){
        const inf = await axios('http://localhost:3001/pokemons');
        console.log(inf);
        return dispatch({
            type: GET_ALL_POKEMONS,
            payload: inf.data
        })
    }
}
//http://localhost:3001/pokemons/1
export const getPokeById = (id) => {
    return async function(dispatch){
        const info = await axios(`http://localhost:3001/pokemons/${id}`)
        console.log(info);
        return dispatch({
            type: GET_POKEMON_BY_ID,
            payload: info.data
        })
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL_STATE }
}

export const getName = (name) => {
    return async function(dispatch){
        try {
            const info = await axios(`http://localhost:3001/pokemons/?name=${name}`)
            return dispatch({
                type: GET_BY_NAME,
                payload: info.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const orderAction = (payload) => {
    return {
        type: ACTION_ORDER,
        payload
    }
};

export const filterOrigin = (payload) => {
    return {
        type: ACTION_FILTER_ORIGIN,
        payload
    }
}