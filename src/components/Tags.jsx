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
        `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?`
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
    return (
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
  };
  const ShowItems = () => {
    console.log("data", data);
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            white
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men")}
          >
            jeans
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("ladies")}
          >
            football
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("hoodies")}
          >
            formal
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("shoes")}
          >
            blue
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("shoes")}
          >
            sports
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("shoes")}
          >
            casual
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product.itemId}>
              <div className="card h-100 text-center p-4">
                <NavLink to={`/collection/${product.itemId}`}>
                  <img
                    src={product.picture}
                    className="card-img-top"
                    alt={product.displayName}
                  />
                </NavLink>
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.displayName.substring(0, 12)}
                  </h5>
                  <p className="card-text lead fw-bold">
                    {product.currentPrice}€
                  </p>
                  <NavLink
                    to={`/collection/${product.itemId}`}
                    className="btn btn-outline-dark"
                  >
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
            <h1 className="display-6 fw-bolder text-center">Choose your Items by Tag</h1>
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
