import React from 'react'
import carro from '../Icono/compras.png'
import '../index.css'
const CartWidget =()=>{
return (
   <> 
   <div>
       <img className="carrito" src={carro} alt=""/>
    </div>
    </>

)
}
export default CartWidget