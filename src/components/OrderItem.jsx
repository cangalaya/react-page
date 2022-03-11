import React from 'react'
import iconClose from '@icons/icon_close.png'
import AppContext from '@context/AppContext'

export const OrderItem = ({product }) => {
    const {removeFromCart} = React.useContext(AppContext);
    
    const handleRemove = itemRemove =>{
        removeFromCart(itemRemove);
    }
  return (
    <div className="shopping-cart">
        <figure>
            <img src={product.category.image} alt={product.title}/>
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img src={iconClose} alt="close" onClick={ () => handleRemove(product)}/>
    </div>
  )
}
