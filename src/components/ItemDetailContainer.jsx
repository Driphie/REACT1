import ItemDetail from "./ItemDetail"
import {React, useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useParams} from 'react-router-dom';


const arrProductos = [ {
    nombre: "Cheese",
    id:1,
    url: "https://images.rappi.com.ar/products/f38f5c0d-2456-43c3-b141-ddf21c51fad7-1616771261753.jpeg?d=128x90&e=webp" ,
    descripcion: "Hamburguesa simple con panceta",
    precio:450,
  }
  ,{
    nombre: "Fried Onion",
    id:2,
    url: "https://images.rappi.com.ar/products/85ccfd0d-c1d2-4509-82fe-6ed6873c7cfd-1616771288128.jpeg?d=128x90&e=webp" ,
    descripcion: "Hamburguesa simple con cebolla",
    precio:500,
  }
  ,{
    nombre: "Bacon",
    id:3,
    url: "https://images.rappi.com.ar/products/94476e1d-4765-47f2-8299-b1908ffcef50-1616771358349.jpeg?d=128x90&e=webp" ,
    descripcion: "Hamburguesa simple con bacon",
    precio:550,
  }
                    ]

     function ItemDetailContainer() {
       
     //agrego useState para guardar el producto
    const [producto, setProducto] = useState({});
    
    //obtengo el id
    const {id} = useParams()

    // cada vez que el id cambie va a hacer el find
    useEffect(() =>{
        const elItem = arrProductos.find(item => item.id == id)
        setProducto(elItem)
    }, [id]);
  return (
   
      <div><ItemDetail productos={producto}/> </div>
  )
  }

export default ItemDetailContainer