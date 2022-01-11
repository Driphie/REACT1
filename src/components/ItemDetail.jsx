import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contador from "./Contador"
import Botoncarrito from "./Botoncarrito"
import BotonFinalizar from "./BotonFinalizar"
import {useState, useEffect} from "react";
import { useCart} from "../components/CartContext"
import Carrito from "../components/Carrito"


const ItemDetail =({productos})=> {
const cart = useCart();
const [carrito, setcarrito]= useState(false);
const [count, setCount]= useState(1);




function Agregaralcarrito1(){
  setcarrito(true)
  cart.addItem(productos.nombre,count,productos.precio,productos.id);
}
return(    

  <div className="card" key={productos.id}>
     
            <img src={productos.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{productos.nombre}</h5>
                    <h6 className="card-title">{productos.descripcion}</h6>
                    <h6 className="card-title">${productos.precio}</h6>
                    </div>
                    
                    
                    {carrito ? (console.log(cart), <BotonFinalizar> </BotonFinalizar>) :( <React.Fragment>  <Contador stock={10} initial={count} count={count} setCount={setCount}> </Contador> <Botoncarrito Agregaralcarrito={Agregaralcarrito1}></Botoncarrito></React.Fragment>)}
                    
                    <br />  
                    <Link to={`/items`} ><button  className="btn btn-secondary">  Volver</button></Link>
                    
        </div>
         )}       
export default ItemDetail;