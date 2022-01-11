// import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contador from "./Contador"
import Botoncarrito from "./Botoncarrito"
import BotonFinalizar from "./BotonFinalizar"
import {useState, useEffect} from "react";
import { useCart,ObtenerTotal} from "../components/CartContext"
import { Redirect,NavLink } from 'react-router-dom';

function Carrito(){
  const cart = useCart();
  // const preciototal=`${cart.cart[1].precio} * ${cart.cart[1].cantidad} `
  // for (i=0; i<cart.length; i++){
  //   <h2>{cart.cart[1].item} x {cart.cart[i].cantidad} </h2>
  // }
  let objetos=[]
  const preciototal=0;
  function FinalizarCompra() {
    

  }
  console.log(cart)
  return(
    
    <React.Fragment>
     

     <div className="Carrito">
     <h2 cl>Mi carrito</h2>{
       
      cart.cart.map(item=>(
        
      <div >
        <strong key={item.id}>{item.item}</strong> x {item.cantidad} <strong>${item.precio*item.cantidad} </strong> <button  className="btn btn-primary" onClick={()=>{cart.removeItem(item.id)}}>Eliminar Producto </button> <br />
        <br />
      </div>
      
          
      ))

      }
  
      <h2>Total: ${ObtenerTotal(cart)}</h2>
    
      <NavLink className="btn btn-primary" to="/Checkout"> Finalizar Pedido </NavLink><br />
      <br />
      <button onClick={cart.VaciarCarrito} className="btn btn-secondary">Vaciar Carrito</button>
      </div>
      </React.Fragment>
  );
  }
  
  export default Carrito;
  