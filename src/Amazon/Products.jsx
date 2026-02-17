import React from "react";

const Products = ({elm:{title, category, description, price, image}}) => {
  return (
    <div className="col-md-4" style={{height:"60vh"}}>
        
        <div className="row g-0  rounded overflow-hidden align-items-center mb-0 shadow-sm  h-100 ">
        
          <div className="col-md-8 p-4 d-flex flex-column ">
        
            <strong className=" mb-0 text-primary-emphasis">
            {title}
            </strong>
            <h3 className="mb-0">{category}</h3>
            <div className="mb-1 text-body-secondary">${price}</div>
            <p className="card-text overflow-hidden " style={{height:"20vh"}}>
             {description}
            </p>
          </div>
          <div className="col-md-4">
        
        <img src= {image} alt="" className="bd-placeholder-img img-fluid "style={{height:"200px"}}/>
          </div>
        <div className="my-2">
            <button className="btn btn-info">Buy Now</button>
            <button className="btn btn-success mx-3">Add to cart</button>
        </div>
        </div>
      </div>
    
  );
};

export default Products;
