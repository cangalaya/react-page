import React from 'react'
import { OrderItem } from '@components/OrderItem.jsx'
import AppContext from '../context/AppContext'
import '@styles/MyOrder.scss'

import flechita from '@icons/flechita.svg'


const MyOrder = () => {
    const {state} = React.useContext(AppContext);

    const sumTotal = ()=> {
        const reducer = (acumulador, currentValue ) => acumulador + currentValue.price;
        const sum = state.cart.reduce(reducer,0);
        return sum;
    }
    
  return (
    <aside className="product-detail">
        <div className="title-container">
            <img src={flechita} alt="arrow"/>
            <p className="title">My order</p>
        </div>

            <div className="my-order-content">
                <div className="my-order-content__container-cards">
                {state.cart.map(product => (<OrderItem product = {product} key={`orderItems-${product.id}`} />))}
                </div>

                <div className="my-order-content__info">
                <div className="order">
                    <p>
                    <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                {sumTotal() !== 0 && <button className="primary-button" >
                    Checkout
                </button> }
                </div>


            </div>
  </aside>
  )
}

export default MyOrder