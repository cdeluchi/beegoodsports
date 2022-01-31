import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { NavLink } from "react-router-dom";
import CartBtn from "./CartBtn";
import Loading from "./Loading";

// import { useDispatch } from "react-redux";
// import { addItem, delItem } from '../redux/action/index';

const Product = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartBtn, setCartBtn] = useState("Add to cart");

  


  useEffect(() => {
      const getProduct = async () => {
          setLoading(true);
          const response = await fetch(
              `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items/${itemId}`
              );
              setProduct(await response.json());
              setLoading(false);
      };
      getProduct();
    }, [itemId]);
   
    
    const handleCart = (product) => {
      if (cartBtn === "Add to Cart"){
        setCartBtn("Remove from Cart")
      }else{
        setCartBtn("Add to Cart")
      }
    }
      const ShowProduct = () => {
        console.log("data in itemId", product);


        
    return (
      <>
        <div className="col-md-6">
          
          <img
            src={product.picture}
            alt={product}
            height="500px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-upprcase text-black-50">{product.categoryId}</h4>
          <h1 className="display-5">{product.displayName}</h1>
          <h3 className="display-6 fw-bold my-4">{product.currentPrice}€</h3>
          <p className="lead">{product.description}</p>
          
          <button onClick={() => handleCart(product)} className="btn btn-outline-dark px-4 py-2" >
            {cartBtn}
          </button>
          
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <div className="container py-5">
          <div className="row py-5">
            {loading ? <Loading /> : <ShowProduct />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
