import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  cartCount: 3,
  onCartClick: () => alert('Cart Clicked!'),
  onProfileClick: ()=>alert('Profile Clicked!'),
};
