import React from "react";

const ProductCard = ({ product,onAddToCart }) => {
  return (
    <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition duration-300">
      <img
        className="w-full h-64 object-contain bg-gray-100"
        src={product.image}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {product.title}
        </h2>
        <p className="text-xl font-bold text-green-600 mb-4">${product.price}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => {onAddToCart(product),console.log(product)}}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
