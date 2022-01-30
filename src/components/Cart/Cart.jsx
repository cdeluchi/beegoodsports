import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

function Cart({product}) {
    const classes = useStyles();
    // const isEmpty = product;
    
    const EmptyCart = () => (
        <Typography variant='subtitle1'>Your cart is empty!
        <Link className={classes.link} to="/collection">start adding some</Link>
        </Typography>
    );

    // using the () not {} to have the instantly result don't need to wait
    const FilledCart = () => (
        <Grid container spacing={3}>
            {/* {product.itemId.map((item) => (
                <Grid item xs={12} sm={4} key={item.itemId}>
                    <div>item Name</div>
                </Grid>
            ))} */}
        </Grid>
        
    );
    return (
        <Container>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
          { !product.line_items.length ? EmptyCart() : FilledCart() }
        </Container>
      );
    };
  


export default Cart;




// import React from 'react';
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { delItem } from '../redux/action/index'
// import { NavLink } from 'react-router-dom'

// function Cart() {
//     const state = useSelector((state) => state.addItem)
//     const dispatch = useDispatch()

//     const handleClose = (item) => {
//         dispatch(delItem(item))
//     }

//     const cartItems = (cartItem) => {

//         return(
//             <div className='px-4 my-5 bg-light rounded-3' key={cartItem.itemId}>
//                 <div className='container'>
//                     <button onClick={() => handleClose(cartItem)} className='btn-close float-end' aria-label="close"></button>
//                     <div className="row justify-content-center">
//                         <div className="col-md-4">
//                             <img src={cartItem.picture} alt={cartItem.displayName} height="200px" width="180px"/>
//                         </div>
//                         <div className="col-md-4">
//                             <h3>{cartItem.displayName}Cart empty</h3>
//                             <p className='lead fw-bold'>{cartItem.currentPrice}€</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         ) 
//     }

//     const emptyCart = () => {
//           return(
//               <div className="px-4 my-5 bg-light rouded-3">
//                   <div className="container py-4">
//                       <div className="row">
//                           <h3>Your Cart is Empty, let's buy something!</h3>
//                       </div>
//                   </div>
//               </div>
//           );
//     }

//     const button = () => {
//         return(
//             <div className="container">
//                 <div className="row">
//                     <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Process to Checkout</NavLink>
//                 </div>
//             </div>
//         )
//     }
//     return(
//         <>
//         {state.length === 0 && emptyCart()}
//         {state.length !== 0 && state.map(cartItems)}
//         {state.length !== 0 && button()}
//         </>
//     )
// }

// export default Cart;
