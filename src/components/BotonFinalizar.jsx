import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contador from "./Contador"
import { useState, useEffect} from "react";
import Carrito from "./Carrito"


function Botonfinalizar({Finalizarboton}){

    
    return (
    <Link to={`/Carrito`} type='button' className="btn btn-primary" >Finalizar compra</Link>
    
    
    )
}
export default Botonfinalizar;

    
