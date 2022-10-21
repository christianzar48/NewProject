import "./form.css"
import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react";
import axios from "axios"

function AddForm() {

    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        name : "",
        id : "",
        type1 : "",
        type2 : "",
        height : "",
        weight : "",
        move1 : "",
        move2 : "",
        info : "",
        hp : "",
        atk : "",
        def : "",
        satk : "",
        sdef : "",
        spd : "",
        color : "",
        color2 : "",
        color3 : "",
        img : ""
      })
    
      const handleInputChange = (e) => {
        let { name, value } = e.target;
        let newPokemon = {...formData, [name]: value};
        setFormData(newPokemon)
      }

      const formSubmit = async(e) => {
        e.preventDefault();
        if(!e.target.checkValidity()) {
            console.log("Do not send")
        } else {
            await axios.post("http://localhost:3000/homepage/add", formData)
            .then(res => {
                navigate('/homepage')
            })
        }
      }

    return(
    <div className="Form">
        <div className='form-container'>
            <Link to="/">
                <img className="arrow-img" src="/Imagenes/arrow-left.svg" />
            </Link>
            <h1>Agrega un Pokemon!</h1>
            <form onSubmit={formSubmit} className="add-form">
                <input onChange={handleInputChange} value={formData.name} placeholder="Name" type="text" name="name" />
                <input onChange={handleInputChange} value={formData.id} placeholder="Id" type="number" name="id" />
                <input onChange={handleInputChange} value={formData.type1} placeholder="Type" type="text" name="type1" />
                <input onChange={handleInputChange} value={formData.type2} placeholder="Type 2" type="text" name="type2" />
                <input onChange={handleInputChange} value={formData.height} placeholder="Height" type="text" name="height" />
                <input onChange={handleInputChange} value={formData.weight} placeholder="Weight" type="text" name="weight" />
                <input onChange={handleInputChange} value={formData.move1} placeholder="Move 1" type="text" name="move1" />
                <input onChange={handleInputChange} value={formData.move2} placeholder="Move 2" type="text" name="move2" />
                <input onChange={handleInputChange} value={formData.info} placeholder="Info" type="text" name="info" />
                <input onChange={handleInputChange} value={formData.hp} placeholder="HP" type="number" name="hp" />
                <input onChange={handleInputChange} value={formData.atk} placeholder="ATK" type="number" name="atk" />
                <input onChange={handleInputChange} value={formData.def} placeholder="DEF" type="number" name="def" />
                <input onChange={handleInputChange} value={formData.satk} placeholder="SATK" type="number" name="satk" />
                <input onChange={handleInputChange} value={formData.sdef} placeholder="SDEF" type="number" name="sdef" />
                <input onChange={handleInputChange} value={formData.spd} placeholder="SPD" type="number" name="spd" />
                <input onChange={handleInputChange} value={formData.color} placeholder="Insert Primary Color" type="color" name="color" />
                <input onChange={handleInputChange} value={formData.color2} placeholder="Insert Secondary Color" type="color" name="color2" />
                <input onChange={handleInputChange} value={formData.color3} placeholder="Insert Tertiary Color" type="color" name="color3" />
                <input type="text" onChange={handleInputChange} value={formData.img} placeholder="Insert Pokemon IMG URL" name="img"/>
                <div className="btn-submit">
                    <button className="submit" type="submit" value="Submit">Submit</button>
                </div>
            </form>
      </div>
    </div>
    )
}

export default AddForm;