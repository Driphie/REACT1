import CartWidget from  './CartWidget';
import logo from '../Icono/logo.png'
import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


const Navbar =({saludo})=>{
  return (
  <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
       
       <Link className="navbar-brand" to="/">Inicio</Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"></button>
       </div>
       <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/Contacto">Contacto</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/items">Pedidos</Link>
        </li>
      </ul>
        
        <Link to="/Carrito"><CartWidget/>
        </Link>
        </div>
      </nav>
  </header>


)
};
export default Navbar;