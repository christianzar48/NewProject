import "./form.css"
import { Link } from "react-router-dom"

function AddForm() {
    return(
    <div className="Form">
        <div className='form-container'>
            <Link to="/">
                <img className="arrow-img" src="/Imagenes/arrow-left.svg" />
            </Link>
            <h1>Agrega un Pokemon!</h1>
            <form className="add-form">
                <input placeholder="Name" type="text" name="name" />
                <input placeholder="Id" type="number" name="id" />
                <input placeholder="Type" type="text" name="type" />
                <input placeholder="Type 2" type="text" name="type2" />
                <input placeholder="Height" type="text" name="height" />
                <input placeholder="Weight" type="text" name="weight" />
                <input placeholder="Move 1" type="text" name="move1" />
                <input placeholder="Move 2" type="text" name="move2" />
                <input placeholder="Info" type="text" name="info" />
                <input placeholder="HP" type="number" name="hp" />
                <input placeholder="ATK" type="number" name="atk" />
                <input placeholder="DEF" type="number" name="def" />
                <input placeholder="SATK" type="number" name="satk" />
                <input placeholder="SDEF" type="number" name="sdef" />
                <input placeholder="SPD" type="number" name="spd" />
                <div className="btn-submit">
                    <button className="submit" type="submit" value="Submit">Submit</button>
                </div>
            </form>
      </div>
    </div>
    )
}

export default AddForm;