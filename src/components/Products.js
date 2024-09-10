import React, { useState } from "react";
import "./Products.css";
import ProductPage from "./ProductPage";

import { Link } from "react-router-dom";

function Products() {
  const initialProducts = [
    {
      id: 1,
      name: "Brightening serum - Vitamin C",
      price: 2200,
      availableQuanutity: 0,
      discountpercentage: 0,
      image: "/serum.jpg",
    },
    {
      id: 2,
      name: "Multi Peptide Serum",
      price: 2450,
      availableQuanutity: 20,
      discountpercentage: 20,
      image: "/Serum4.webp",
    },
    {
      id: 3,
      name: "Hyaluronic acid",
      price: 2200,
      availableQuanutity: 30,
      discountpercentage: 10,
      image: "/serum.jpg",
    },
    {
      id: 4,
      name: "Retinol",
      price: 2800,
      availableQuanutity: 50,
      discountpercentage: 0,
      image: "/serum.jpg",
    },
    {
      id: 5,
      name: "Anti Aging Bundle",
      price: 7862,
      availableQuanutity: 18,
      discountpercentage: 10,
      image: "/serum.jpg",
    },
    {
      id: 6,
      name: "Barrier Moisturizer",
      price: 1200,
      availableQuanutity: 25,
      discountpercentage: 10,
      image: "/serum.jpg",
    },
    {
      id: 7,
      name: "Retinol",
      price: 2800,
      availableQuanutity: 30,
      discountpercentage: 10,
      image: "/serum.jpg",
    },
    {
      id: 8,
      name: "Retinol",
      price: 2800,
      availableQuanutity: 15,
      discountpercentage: 10,
      image: "/serum.jpg",
    },
    {
      id: 9,
      name: "Retinol",
      price: 3300,
      availableQuanutity: 40,
      discountpercentage: 10,
      image: "/serum.jpg",
    },
    {
      id: 10,
      name: "Retinol",
      price: 4500,
      availableQuanutity: 20,
      discountpercentage: 10,
      image: "/serum.jpg",
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [proQuantity, setProQuantity] = useState(initialProducts);

  const handleAddCart = (product) => {
    const updatequantity = proQuantity.map((item) =>
      item.id === product.id
    ? { ...item, quantity: item.availableQuanutity - 1 }
    : item
  );
  setProQuantity(updatequantity);
  
  const alreadyProduct = cart.find((item) => {
    return item.id === product.id;
  });
  if (alreadyProduct) {
    const latestProduct = cart.map((item) =>
      item.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
  );
  setCart(latestProduct);
} else {
  setCart([...cart, { ...product, quantity: 1 }]);
}
};
console.log("🚀 ~ handleAddCart ~ proQuantity:",cart );

// handle remove product
const handleRemoveCart = (product) => {
  const alreadyCart = cart.find((item) => {
   return item.id === product.id;
  });
  if (alreadyCart) {
    const latestCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 } : item
  );
  setCart(latestCart)
  console.log("🚀 ~ handleRemoveCart ~ handleRemoveCart:",latestCart );
}}









  return (
    <>
      <div className='discount-heading'>
        <Link to='/'>Back to Home</Link>
        <h4>FLAT 15% OFF ON ALL BUNDLES 🎉</h4>
        <Link to='/Cart'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            fill='currentColor'
            className='bi bi-cart4'
            viewBox='0 0 16 16'
            type='button'
            to='/Cart'
          >
            <path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0' />
          </svg>
        </Link>

        <h3>Serum</h3>
      </div>
      <div className='products'>
        {products.map((product, index) => (
          <ProductPage
            key={index}
            product={product}
            handleAddCart={handleAddCart}
            handleRemoveCart={handleRemoveCart}
            // image={product.image}
            // name={product.name}
            // price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
