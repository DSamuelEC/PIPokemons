import { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        image:'',
        healt: '',
        attack: '',
        defense: ''
    })

    const handleChange = (event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return(
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>

            <label htmlFor="image">Image: </label>
            <input type="text" name="image" value={form.image} onChange={handleChange}/>

            <label htmlFor="healt">Healt: </label>
            <input type="text" name="healt" value={form.healt} onChange={handleChange}/>

            <label htmlFor="attack">Attack: </label>
            <input type="text" name="attack" value={form.attack} onChange={handleChange}/>

            <label htmlFor="defense">Defense: </label>
            <input type="text" name="defense" value={form.defense} onChange={handleChange}/>

            <button>CREAR POKEMON</button>
        </form>
    )
}

export default Form;