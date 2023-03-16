import React from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Lista from './Lista'
import Forms from './Forms'
import PokemonList from './axios_list/PokemonList'
import Logout from './Logout'
import Perfil from './Perfil'

/*Pasando por parametro las props*/
export default function Navbar(props) {

    /*  Manejo de rutas REACT ROUTER
        BrowserRouter: Rama principal o contenedor principal de las rutas
        Routes: Contenedor sub-principal en donde asignaremos las rutas del nav
        Route: Asignamos ruta por ruta para el nav
    */
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            {/*Pasando la props name en el menú*/}
                <a className="navbar-brand" href="#">Welcome {props.name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* Componente Link hace referencia a las rutas que creamos
                        propiedad to: asignamos el nombre de la ruta (path)
                    */}
                    <Link to='/'>Home</Link>
                    <Link to='/forms'>Form</Link>
                    <Link to='/lista2'>Pokemones</Link>
                    <Link to='/perfil'>Perfil</Link>
                    <Link to='/logout'>Logout</Link>
                    
                    {/*<Logout></Logout>*/}
                </div>
                </div>
            </div>
            </nav>
            <Routes>
                {/* Asignando las rutas Home y Formulario
                    path: nombre de la ruta que va a ser referencia al link del nav
                    element: asignamos el componente en el que se va a dirigir la ruta
                */}
                <Route path='/' element={<Lista/>}></Route>
                <Route path='/forms' element={<Forms/>}></Route>
                <Route path='/lista2' element={<PokemonList/>}></Route>
                <Route path='/logout' element={<Logout/>}></Route>
                <Route path='/perfil' element={<Perfil/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
