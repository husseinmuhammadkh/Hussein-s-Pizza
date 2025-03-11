import React from 'react';
import { MenuList } from "../helpers/MenuList";
import Menuitem from '../components/Menuitem';
import "../styles/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Delicious Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, Key) => {
        return (
        <Menuitem 
        Key={Key}
        image={menuItem.image} 
        name={menuItem.name} 
        price={menuItem.price}
        />
        )
      })}
      </div>
    </div>
  );
}

export default Menu
