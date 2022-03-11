import React from 'react'
import { Header } from '@components/Header.jsx';
import { HomeProducts } from '@containers/HomeProducts.jsx';

const Home = () => {
  return (
      <>
      <Header/>
      <HomeProducts />
      </>
  )
}

export default Home;