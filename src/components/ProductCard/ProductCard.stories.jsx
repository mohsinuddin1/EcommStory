import ProductCard from './ProductCard';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: 1,
    title: "Test Product",
    price: 99.99,
    image: "https://www.shutterstock.com/image-photo/brown-womens-handbag-isolated-on-white-2500357185",
  },
  onAddToCart:()=>alert('Add to cart button clicked'),
};
