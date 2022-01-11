import {useState, createContext,useContext} from "react"

export const CartContext= createContext();
export const useCart = () => useContext (CartContext);
export let itemsencarrito = [];



export   const ObtenerTotal = (cart)=>{
    let preciototal=0;
   cart.cart.forEach(function(comida,index){
       preciototal=preciototal+(cart.cart[index].precio*cart.cart[index].cantidad)
   })
    
    return(
        preciototal
    )
}

export const CartProvider =({children})=> {
    const [cart, setCart] = useState ([]);
    
    const addItem=(item1,cantidad1,precio1,id1)=>{
        setCart([...cart,{item:item1,cantidad:cantidad1,precio:precio1, id:id1}]);

    }
    function removeItem(n) {
        const newCart = cart.filter(item123 => item123.id !== n)
        setCart(newCart)
    }
    function VaciarCarrito() {
        setCart([]);
    }
  

    return(
        <CartContext.Provider value={{cart,addItem,removeItem,VaciarCarrito}}>
            {children}</CartContext.Provider>
    )
}
