import { Link } from 'react-router-dom';

const Pokemon = ({id, name, image, types}) =>{
    return(
        <div>
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            <h3> Types: {types.map(type => type.name).join(" - ")}</h3>
            <img src={image}/>
        </div>
    )
}

export default Pokemon;