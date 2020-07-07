module.exports = {
  // order impacts order in storybook
  stories: [
    "../src/Intro.stories.mdx",
    "../src/Support.stories.mdx",
    "../src/**/**/*.stories.@(js|mdx)",
  ],
  // globbing pattern needs a @ before the extensions
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
};
