import React from 'react'

const initialState = {
    cart : [],
}

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    const [selectProduct, setSelectProduct] = React.useState(false);

    const addToCard = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }
    return {
        state,
        addToCard,
        removeFromCart,
        selectProduct,
        setSelectProduct
    }
}

export default useInitialState; 