import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Collection = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState([]);

  // let componentMounted = true;

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const response = await fetch(
        "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?collection=winter2020&tag=sports"
      );
      
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log("data in Items", data); 
      
      // return () => {
      //   componentMounted = false;
      // };
    };
    getItems();
  }, []);

  const Loading = () => {
    return(
    <>
        <div className="col-md-3">
        <Skeleton height={350} />
        </div>
        <div className="col-md-3">
        <Skeleton height={350} />
        </div>
        <div className="col-md-3">
        <Skeleton height={350} />
        </div>
        <div className="col-md-3">
        <Skeleton height={350} />
        </div>
    </>
    );
  };

  const filterProduct = (cat) => {
      const updatedList = data.filter((x) => x.categoryId === cat);
      setFilter(updatedList);
  }
  const ShowItems = () => {
    console.log("data", data);
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("hoodies")}>Hoodies</button>
        </div>

        {filter.map((product) => {
          return (
            
              <div className="col-md-3 mb-4" key={product.itemId}>
                <div className="card h-100 text-center p-4">
                  <img src={product.picture} className="card-img-top" alt={product.displayName} />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.displayName.substring(0,12)}</h5>
                    <p className="card-text lead fw-bold">
                      {product.currentPrice}€
                    </p>
                    <NavLink to={`/collection/${product.itemId}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowItems />}
        </div>
      </div>
    </div>
  );
};

export default Collection;
