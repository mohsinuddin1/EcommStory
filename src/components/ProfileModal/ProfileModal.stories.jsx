import React from 'react';
import ProfileModal from './ProfileModal';

export default {
  title: 'Components/ProfileModal',
  component: ProfileModal,
};

const Template = (args) => <ProfileModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, New York',
  },
  onClose: () => alert('Modal closed'),
  onSave: (data) => alert(`Saved: ${JSON.stringify(data, null, 2)}`),
};
