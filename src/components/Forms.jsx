import React, { useState } from 'react'

export default function Forms() {
    //estado para obtener información del pokemon en base a su nombre
    const [pokemon, setPokemon] = useState({}) // {} porque es objeto

    //estado para obtener el nombre del pokemon
    const [nombre, setNombre] = useState("") // "" porque es cadena

    //estado para obtener el nombre del pokemon
    const obtenerPokemonByName = async() => {
        //hacemos refferencia al nombre que manejamos en el estado para obtener información de dicho pokemon
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const data  = await respuesta.json();
        setPokemon(data);
        setImagen(data.sprites);
    }
    
    //Estado para el manejo de imagenes del pokemon
    const [imagen, setImagen] = useState({}); // {} porque es objeto

    //capturando el nombre del pokemos por medio de un input 
    const handleName = (e) => {
        //console.log(e.target.value); //comprobando si captura el value de input
        setNombre(e.target.value);//llamando al estado nombre para guardar el value del input
    }

    //asignando el método del formulario
    const handleSubmit = (e) => {
        obtenerPokemonByName();
        e.preventDefault(); //cancelando el boton submit
    }

    console.log(pokemon);
    return (
        <div className='container'>
            {/*onSubmit y onChange son eventos*/}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Ingrese el nombre del pokemon</label>
                <input type="text" placeholder='Ingrese Pokemon' className='form-control' onChange={handleName}/> <br/>
                <button className='btn btn-dark' type='submit'>Capturar Pokemon</button>
            </form><br />
            <div className='card'>
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <img src={imagen.front_default} alt="" />
                </div>
            </div>
        </div>
    )
}
