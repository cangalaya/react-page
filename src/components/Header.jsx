import React from 'react'
import '../styles/Header.scss'

import iconMenu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import logoYardSale from '@logos/logo_yard_sale.svg'
import iconShopingCart from '@icons/icon_shopping_cart.svg'
import { Menu } from '@containers/Menu.jsx'
import MyOrder from '@containers/MyOrder.jsx'
import { NavbarMovile } from './NavbarMovile.jsx'


import AppContext from '@context/AppContext'

export const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const [toggleOrder, setToggleOrders ] = React.useState(false)
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const {state } = React.useContext(AppContext)
  
  const handleToggle = () => {
    setToggle(!toggle);
  }
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  }
  
  return (
    <nav>
    <img src={iconMenu} alt="menu" className="menu" onClick={handleToggleMenu}/>

    <div className="navbar-left">
      <img src={logo} alt="logo" className="logo" />
      <img src={logoYardSale} alt="logo Yard Sale" className='logo-yardsale'/>
      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li className="navbar-email" onClick={handleToggle}>
          platzi@example.com
        </li>
        <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrder)}>
          <img src={iconShopingCart} alt="shopping cart" />
          {state.cart.length > 0 ?  <div>{state.cart.length}</div>: null }
        </li>
      </ul>
    </div>
    { toggle && <Menu />}
    { toggleOrder && <MyOrder/>}
    { toggleMenu && <NavbarMovile />}
  </nav>
  )
}
