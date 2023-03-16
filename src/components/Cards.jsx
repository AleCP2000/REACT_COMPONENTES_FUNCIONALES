import { useState, useEffect } from 'react'

export default function Cards(props) {
    /*
    estamos pasando las props que provienen del estado de pokemones
    del componente Lista.jsx
    */

    //Estado en donde guardar información de un pokemon
    const [pokemon, setPokemon] = useState({});
    //Estado para el manejo de imagenes del pokemon
    const [sprites, setSprites] = useState({});
    //Estado para el manejo de de especies del pokemon
    const [species, setSpecies] = useState({});

    //Obteniendo por medio de fetch cada URL de cada pokemon
    const obtenerPokemonByUrl = async (url) => {
        let respuesta = await fetch(url);
        let data = await respuesta.json();
        // console.log(data.results); results es el atributo en donde está el arreglo de los pokemones
        setPokemon(data); // actualizando el estado con la información de la API
        setSprites(data.sprites); //almacenamos la informacion directa de las imagenes del pokemon
        setSpecies(data.species); // almacenamos la informacion directa decada especie de pokemon
    }

    //montando metodo "obtenerPokemonesByUrl"
    useEffect(()=> {
        obtenerPokemonByUrl(props.url)
    }, []);
    
    console.log(pokemon);  //comprobando si funciona
    
    const idModal = `#${pokemon.id}`; // idModal hace referencia al id de cada pokemon para que cada uno tenga un modal propio
    return (
        <div>
            <div className='card'>
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <img src={sprites.front_default} alt="" />
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                        Watch more
                    </button>
                </div>
            </div>
            
            {/*apartado del modal*/}

            <div className="modal fade" id={pokemon.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{pokemon.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={sprites.back_shiny} alt= {pokemon.name} />
                        <p><b>Height: {pokemon.id} </b></p>
                        <p><b>Height: {pokemon.height} </b></p>
                        <p><b>Weight: {pokemon.weight} </b></p>
                        <p><b>Specie: {species.name} </b></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
