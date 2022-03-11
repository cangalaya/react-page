import React  from 'react'
import AppContext from '@context/AppContext';
import iconAddToCard from '@icons/bt_add_to_cart.svg';
import iconAddedToCard from '@icons/bt_added_to_cart.svg'


export const ProductItem = ({product}) => {
  const {addToCard, removeFromCart, state} = React.useContext(AppContext);
  

  const handleClick = (item) => {
    addToCard(item);
    if (state.cart.includes(product)){
      removeFromCart(product)
    }
  }

  return (
    <div className="product-card">
        <img src= {product.category.image} alt={product.title} />
        <div className="product-info">
          <div>
            <p>${product.price}</p>
            <p>{product.category.name}</p>
          </div>
          <figure onClick={() => handleClick(product)}>
            <img src={state.cart.includes(product) ? iconAddedToCard : iconAddToCard} alt="icon add to card"/>
          </figure>
        </div>
    </div>
  )
}
