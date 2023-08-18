import { useState } from "react"
import { useDispatch } from "react-redux"
import { getName } from '../../redux/actions'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [word, setWord] = useState('')

    const handlerChange = (event) =>{
        event.preventDefault()
        setWord(event.target.value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(getName(word))
        setWord('')
    }
    return (
        <div>
            <input 
            type="text"
            value={word}
            onChange={ handlerChange }
            />
            <button type="submit" onClick={ handlerSubmit }>SEARCH</button>
        </div>
    )
}

export default SearchBar;