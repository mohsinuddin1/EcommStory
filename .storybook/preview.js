/** @type { import('@storybook/react').Preview } */
import '../src/index.css'; // if you're using Tailwind
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;