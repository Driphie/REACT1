import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contador from "./Contador"
import {useState, useEffect} from "react";


function Botoncarrito({Agregaralcarrito}){
  
    return (
    <button onClick={Agregaralcarrito} className="btn btn-primary" >Agregar al carrito</button>
    )
}
export default Botoncarrito;