import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'

export default function PokemonCard({poke}) {
    //estado para cada pokemon
    const [pokes, setPokes] = useState({});    
    //Estado para el manejo de imagenes del pokemon
    const [sprites, setSprites] = useState({});
    //Estado para el manejo de de especies del pokemon
    const [species, setSpecies] = useState({});

    const obtenerPokemonesByUrl2 = (url) => {
        axios.get(url).then((response) =>{
            setPokes(response.data);
            setSpecies(response.data.species);
            setSprites(response.data.sprites);
        })
    }
  
    useEffect(()=>{
          obtenerPokemonesByUrl2(poke.url);
    },[])
  
    const idModal = `#${pokes.id}`; // idModal hace referencia al id de cada pokemon para que cada uno tenga un modal propio

    return (
        <div>
            <div className='card'>
                <div className="card-body">
                    <h5 className="card-title">{pokes.name}</h5>
                    <img src={sprites.front_default} alt="" />
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                        Watch more
                    </button>
                </div>
            </div>
            
            {/*apartado del modal*/}

            <div className="modal fade" id={pokes.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{pokes.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={sprites.back_shiny} alt= {pokes.name} />
                        <p><b>Height: {pokes.id} </b></p>
                        <p><b>Height: {pokes.height} </b></p>
                        <p><b>Weight: {pokes.weight} </b></p>
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
