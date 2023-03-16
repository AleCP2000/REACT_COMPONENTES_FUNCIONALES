import React from 'react'
import { useState, useEffect } from 'react'
import Cards from './Cards';

export default function Lista() {
    /*
    creando estado para guardar la lista de pokemones
    utilizando el hooks useState(), el estado tendrá un arreglo de 2 posiciones
    [0] = es el estado en donde se guarda y como empieza
    [1] = es el estado  que se va  actualizando
    */
    const [pokemones, setPokemones] = useState([]);
    
    /*creando metodo para obtener la API pokemon
    trabajando con una función asíncrona porque nos estamos conectando a una API de otro servidor*/
    const obtenerPokemones = async () => {
        let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
        let data = await respuesta.json();
        // console.log(data.results); results es el atributo en donde está el arreglo de los pokemones
        setPokemones(data.results); // actualizando el estado con la información de la API
    }

    /*
    Hook que maneja 2 parametros
    utilizando el hooks useEffect(), el estado tendrá 2 parametros
    primer parametro = hacer efecto a  un estado, método
    segundo parametro = es el proceso del renderizado /[]/ vacío
    */
    useEffect(() => {
        obtenerPokemones();
    },[]);

    console.log(pokemones);//llamando al estado paraverificar si tiene a los pokemones

    return (
        <div className='container'>
            <h1>Lista de Pokemones</h1>
            <div className='row'>
                {
                    pokemones.map((personajes, indice) => {
                        //Enviando la información del estado otro componente mediante props
                        return (
                            <div className='col-md-4'>
                                <Cards key={indice} {...personajes}></Cards>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
