import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
import { delItem } from '../redux/action/index'

const Cart = () => {
    const state = useSelector((state) => state.addItems)
    const dispatch = useDispatch()

    const handleClose = (product) => {
        dispatch(delItem(product))
    }
    const cartItems = (cartItems) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItems.itemId}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItems)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItems.picture} alt={cartItems.itemId} height="200px" width="180px"/>
                        </div> 
                        <div className="col-md-4">
                            <h3>{cartItems.displayName}</h3>
                            <p className="lead fw-bold">${cartItems.currentPrice}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is empty!</h3>
                    </div>
                </div>
            </div>
        )
    }
    // const button = () => {
    //     return(
    //         <div className="container">
    //             <div className="row">
    //                 <NavLink to="/"></NavLink>
    //             </div>
    //         </div>
    //     )
    // }
    return(
        <>
        
        {state.length !== 0 && state.map(cartItems) || emptyCart()}
        
        </>

    )
}

export default Cart;