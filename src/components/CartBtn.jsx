import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CartBtn = () => {
    const state = useSelector((state) => state.addItems)
    console.log("State", state);
  return(
    <>
        <NavLink to="/cart" className="btn btn-outline-primery ms-2">
            Cart ({state.length})
        </NavLink>
    </>
  )
}

export default CartBtn;
