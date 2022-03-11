import React from 'react';
import axios from 'axios';

// custom Hook para recibir parametros
const useGetProducts = (API) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect( async () => {
        const response = await axios(API);
        setProducts(response.data); 
    }, []);
    return products;
};

export default useGetProducts;