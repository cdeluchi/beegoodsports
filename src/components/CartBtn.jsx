import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function CartBtn() {
    const state = useSelector((state) => state.handleCart)
  return(
    <>
        <NavLink to="./cart" className="btn btn-outline-primery ms-2">
            <span className='fa fa-shopping-cart me-1'>Cart ({state.length})</span>

        </NavLink>
    </>
  )
}

export default CartBtn;
