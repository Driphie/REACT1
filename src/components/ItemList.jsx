import Item from "./Item"
import ItemDetail from "./ItemDetail"
import {React, useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LaptopWindowsTwoTone } from "@material-ui/icons";

function ItemList (){
    const arrProducts = [ {
        nombre: "Cheese",
        id:1,
        url: "https://images.rappi.com.ar/products/f38f5c0d-2456-43c3-b141-ddf21c51fad7-1616771261753.jpeg?d=128x90&e=webp" ,
        descripcion: "Hamburguesa simple con panceta",
      }
      ,{
        nombre: "Fried Onion",
        id:2,
        url: "https://images.rappi.com.ar/products/85ccfd0d-c1d2-4509-82fe-6ed6873c7cfd-1616771288128.jpeg?d=128x90&e=webp" ,
        descripcion: "Hamburguesa simple con cebolla",
      }
      ,{
        nombre: "Bacon",
        id:3,
        url: "https://images.rappi.com.ar/products/94476e1d-4765-47f2-8299-b1908ffcef50-1616771358349.jpeg?d=128x90&e=webp" ,
        descripcion: "Hamburguesa simple con bacon",
      }
     ]

    const [productos, setProductos]= useState([]);

    const obtenerProductos = async()=> {
        setTimeout(()=>{
            const datosProductos = arrProducts;
            setProductos (datosProductos);
        },1);
    }

    useEffect (function (){
        console.log ('Acabo de hacer un map');
        obtenerProductos();
    },[]);

    return(
    <>
    <div > 
        
    {productos.map ( props => <Item props = {props}/>   
    
    )}
    
     


  
    
    
     


</div>
</>
);
}


export default ItemList;