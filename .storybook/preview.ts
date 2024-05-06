import type { Preview } from "@storybook/react";
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" }, // configures storybook to log the actions --- onArchiveTask, onPinTask 
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
