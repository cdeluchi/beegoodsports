import React, { useState, useEffect } from "react";

const Item = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState([]);

  let componentMounted = true;

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const response = await fetch(
        "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?collection=winter2020&tag=sports"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log("data", data);
      }
      return () => {
        componentMounted = false;
      };
    };
    getItems();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowItems = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2">Shoes</button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4">
                  <img src={product.picture} className="card-img-top" alt={product.displayName} />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.displayName.substring(0,12)}</h5>
                    <p className="card-text lead fw-bold">
                      {product.currentPrice}€
                    </p>
                    <a href="/" className="btn btn-outline-dark">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
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

export default Item;
