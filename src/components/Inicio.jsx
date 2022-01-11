import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contador from "./Contador"
import Botoncarrito from "./Botoncarrito"
import BotonFinalizar from "./BotonFinalizar"
import {useState, useEffect} from "react";
import { useCart} from "../components/CartContext"
import { Redirect,NavLink } from 'react-router-dom';


function Inicio(){

    return(
      <>
      <div className="Carrito">
    <h1>Somos Hamburguesas Capital Federal</h1>
    <br />
    <br />
    <br />
    <NavLink className="btn btn-primary" to="/items"> Hace tu pedido aca! </NavLink><br />
    </div>
  </>
  );
  }
  
  export default Inicio;