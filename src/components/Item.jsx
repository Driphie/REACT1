import { BackupOutlined } from "@material-ui/icons";
import React from "react";
import ItemDetail from "./ItemDetail"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Item =({props})=> {

 return(    
      
  <div className="card" key={props.id}>
    
            <img src={props.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <Link to={`/items/${props.id}`} type='button' className="btn btn-primary" >Ver Detalles</Link>
                </div>
        </div>
         )}       
export default Item;