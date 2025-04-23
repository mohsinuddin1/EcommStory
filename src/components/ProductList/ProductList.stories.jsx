import React from "react";
import ProductList from "./ProductList";

export default {
  title: "Components/ProductList",
  component: ProductList,
};

const mockProducts = [
  {
    id: 1,
    title: "Mock Product 1",
    price: 29.99,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Mock Product 2",
    price: 59.99,
    image: "https://via.placeholder.com/150"
  }
];

const mockFetch = () => {
  return Promise.resolve({ json: () => Promise.resolve(mockProducts) });
};

const Template = (args) => <ProductList {...args} />;

export const Default = Template.bind({});
Default.args = {
  addToCart: (product) => alert(`Added ${product.title} to cart!`)
};
