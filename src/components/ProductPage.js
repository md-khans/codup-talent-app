
import "./Products.css";

function ProductPage({ product, handleAddCart, handleRemoveCart }) {
  const { id, image, name, price, availableQuanutity, discountpercentage } =
    product;
 
  const discountPrice = discountpercentage
    ? price - (price * discountpercentage) / 100
    : price;



  return (
    <>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        <div className='col'>
          <div className='card'>
            <img src={image} className='card-img-top' alt={name} />
            <div className='card-body'>
              <h5 className='card-title'>{name}</h5>
              {discountpercentage ? (
                <>
                  <span
                    style={{ textDecoration: "line-through", color: "red" }}
                  >
                    Rs. {price.toFixed(2)} PKR
                  </span>
                  <br/>
                  <span style={{ marginLeft: "10px", color: "green" }}>
                  Rs. {discountPrice.toFixed(2)} PKR
                  </span>
                </>
              ) : (
                <span>Rs. {price.toFixed(2)} PKR</span>
              )}
              {/* <p className='card-text'><s>Rs. {price}.00 PKR</s></p>
              <p className='card-text'>Rs. {discountpercentage ? discountPrice : price}.00 PKR</p> */}
              {/* <p class='card-text'>Discount Rs. {discountPrice}.00 </p> */}
              <p className='card-text'>
                Available Quantity {availableQuanutity}
              </p>
              <div className="btn">
              <button className='btn btn-outline-primary' onClick={() => handleAddCart(product)} >
                Add to Cart
              </button>
              <button className='btn btn-outline-primary' onClick={() => handleRemoveCart(product)}>
                Remove to Cart
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
