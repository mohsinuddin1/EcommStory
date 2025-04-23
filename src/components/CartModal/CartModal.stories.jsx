import CartModal from './CartModal';

export default {
  title: 'Components/CartModal',
  component: CartModal,
};

const CartTemplate = (args) => <CartModal {...args} />;

export const DefaultCart = CartTemplate.bind({});
DefaultCart.args = {
  cartItems: [
    { id: 1, title: 'Stylish Shirt', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Cool Jeans', price: 49.99, image: 'https://via.placeholder.com/150' },
  ],
  delFromCart: () => alert('Delete Clicked!'),
  onClose: () => alert('Closed!'),
};