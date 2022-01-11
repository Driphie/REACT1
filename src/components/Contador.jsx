// DESAFIO CLASE 9
import { Divider } from "@material-ui/core";
import {React, useState} from "react";
import '../index.css'
import { useCart} from "../components/CartContext"
// DESAFIO CLASE 9
const Contador = ({stock, initial, count,setCount}) => {
const cart = useCart();
function agregacontador(n){
    (count + n <= stock) && (count + n >= 1) ? ( 
        
        setCount(count + n)
        ) : (
         alert("Estas seleccionando el 0 o superando el stock")
         );   
}
// DESAFIO CLASE 9
return (
    <>
    
    <div >
        
        <button className="contador" onClick={()=>agregacontador(-1)}>-</button>
        <p  className="contador2">{count}</p>
        <button className="contador" onClick={()=>agregacontador(1)}>+</button>

    </div>
    </>
)
}
// DESAFIO CLASE 9
export default Contador;