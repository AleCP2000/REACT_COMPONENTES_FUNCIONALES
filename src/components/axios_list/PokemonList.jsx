import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard';

export default function PokemonList() {
    /*
    Axios = es una  librería para peticiones HTTP
    axios.get() = peticion para obtener la información de pokemones
    axios.post() = envío de datos
    axios.put() = actualización de datos
    axios.delete() = eliminación de todos los datos
    */

    //declarando estado
    const [pokemonList, setPokemonList] = useState([]);

    //metodo para obtener todos los pokemon con axios
    const obtenerPokemones2 = () =>{
        //haciendo petición con axios
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
        .then((response)=>{
            console.log(response.data.results); //siempre response.data, results es opcional depende de la API
            setPokemonList(response.data.results); 
        }).catch((error)=>{
            console.log(error);
        })
    }

    //montando el método obtenerPokemones2
    useEffect(()=>{
        obtenerPokemones2();
    },[]);

    return (
        <div className='container'>
            <h1 className='text-center fst-italic'>Lista de Pokemones - Parte 2</h1>
            <div className='row'>
                {
                    pokemonList.map((pokemones, indice) => {
                        //Enviando la información del estado otro componente mediante props
                        return (
                            <div className='col-md-4 mt-4'>
                                <PokemonCard key={indice} poke={pokemones}></PokemonCard>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
