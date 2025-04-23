import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard"; 

const ProductList = ({addToCart}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      if (result) {
        setData(result);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      {isLoading ? (
        <h3 className="text-center text-lg font-semibold">Loading data, please wait!</h3>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
