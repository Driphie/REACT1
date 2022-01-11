import Item from "./Item"
import ItemDetail from "./ItemDetail"
import {React, useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LaptopWindowsTwoTone } from "@material-ui/icons";

function ItemList (){
  const arrProducts = [ {
      nombre: "Simple Burger + Papas Fritas",
      id:1,
      url: "https://bigpons.com.ar/productos/20210422173531.jpeg" ,
      descripcion: "Medallon x1 Cheddar Feta x2",
    }
    ,{
      nombre: "STACKED BACON + PAPAS FRITAS",
      id:2,
      url: "https://bigpons.com.ar/productos/20210423150815.jpeg" ,
      descripcion: "Medallón de x 2 + Cheddar fetas x 4 + Bacon ahumado por nosotros x 4 fetas + Relish sauce + Papas fritas",
    }
    ,{
      nombre: "Cheese Burger Triple + Papas Fritas",
      id:3,
      url: "https://bigpons.com.ar/productos/20210423145846.jpeg" ,
      descripcion: "Medallon x3 Cheddar Fetas x6",
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