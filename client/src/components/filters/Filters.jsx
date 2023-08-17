import { useDispatch } from "react-redux";
import { filterOrigin } from "../../redux/actions";

export default function Filters() {
    const dispatch = useDispatch();
    const handlerSelect = (event) => {
        dispatch(filterOrigin(event.target.value))
    }
    return (
        <div>
            <select onChange={handlerSelect}>
                <option value="Db">DataBase</option>
                <option value="Api">Api</option>
            </select>
        </div>
    )
}