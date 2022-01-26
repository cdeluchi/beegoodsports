import React from 'react';
import Item from './Items';


const Home = () => {
  return <div>
            <div className='hero'>
                <div className="card bg-dark text-white border-0">
                <img src="/assets/beegoodsp.png" className="card-img" alt="Background" height="800"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    
                    </div>
                </div>
            </div>
            <Item/>
        </div>;
        
};

export default Home;

