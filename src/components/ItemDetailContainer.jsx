import ItemDetail from "./ItemDetail"
import {React, useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useParams} from 'react-router-dom';


const arrProductos = [ {
  nombre: "Simple Burger + Papas Fritas",
  id:1,
  url: "https://bigpons.com.ar/productos/20210422173531.jpeg" ,
  descripcion: "Medallon x1 Cheddar Feta x2",
  precio:700,
}
,{
  nombre: "STACKED BACON + PAPAS FRITAS",
  id:2,
  url: "https://bigpons.com.ar/productos/20210423150815.jpeg" ,
  descripcion: "Medallón de x 2 + Cheddar fetas x 4 + Bacon ahumado por nosotros x 4 fetas + Relish sauce + Papas fritas",
  precio:1100,
}
,{
  nombre: "Cheese Burger Triple + Papas Fritas",
  id:3,
  url: "https://bigpons.com.ar/productos/20210423145846.jpeg" ,
  descripcion: "Medallon x3 Cheddar Fetas x6",
  precio:1300,
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