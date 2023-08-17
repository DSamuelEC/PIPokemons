import { GET_ALL_POKEMONS, GET_POKEMON_BY_ID, CLEAN_DETAIL_STATE, GET_BY_NAME, ACTION_ORDER, ACTION_FILTER_ORIGIN } from './action-types';

const initialState = {
    pokemons: [],
    pokemonDetail: {},
    sort: '',
    filterOrigin: '',
    //filterType: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }

        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonDetail: action.payload
            }

        case CLEAN_DETAIL_STATE:
            return {
                ...state,
                pokemonDetail: {}
            }

        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload
            }

        case ACTION_ORDER:
            return {
                ...state,
                sort: action.payload
            }

        case ACTION_FILTER_ORIGIN: 
            return {
                ...state,
                filterOrigin: action.payload
                
            }

        default:
            return { ...state }
    }
}

export default reducer;