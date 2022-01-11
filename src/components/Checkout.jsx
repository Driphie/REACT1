import React from "react";
import ItemList from "./ItemList"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contador from "./Contador"
import Botoncarrito from "./Botoncarrito"
import BotonFinalizar from "./BotonFinalizar"
import {useState, useEffect} from "react";
import { useCart,ObtenerTotal} from "../components/CartContext"
import { Redirect,NavLink } from 'react-router-dom';

function Checkout(){
    function getRandomArbitrary(min, max) {
        return Math. trunc(Math.random() * (max - min) + min)
      }
    const cart = useCart();
    console.log(cart)
    return(
     <React.Fragment>
         <div className="Carrito" >
     <h2>Gracias por confiar en nosotros!</h2>
     <h4>Su pedido nro: {getRandomArbitrary(9999,0)} quedo confirmado</h4>

     {
      cart.cart.map(item=>(
        
      <div>
        <strong key={item.id}>{item.item}</strong> x {item.cantidad} <strong>${item.precio*item.cantidad} </strong>  <br />
        <br />
      </div>
      
          
      ))

      }
      <h2>Total: $ {ObtenerTotal(cart)}</h2>
    
      </div>
      
      </React.Fragment>
  );
  }
  
  export default Checkout;
  
      