# changelog

## Release 0.5.0
Sprint 5 / January 30, 2020

### Updates
- added GlobalStyle file to styles folder. This uses styled-components' createGlobalStyle to add global styles to the project. 
- set global SVG styles to inherit the width of their parent (may change this in the future).
- shrunk existing timer button down in size.
- updated naming convention for all style files to be *.styled.tsx.
- added multiline-comment-style rule to ESLint config to allow for quickly commenting out blocks of code.
- used parameter property in Timer component to set this.interval property on the Timer component which is for the timer interval.
- added startTimer, stopTimer, and pauseTimer methods to Timer component.
- made handleClick on first Timer Button conditional so that a different method fires depending on the Button's button type (which gets set in state and changes when the Button is clicked).

## Release 0.4.0
Sprint 4 / January 16, 2020

### 0 bug, 1 documentation, 14 enhancement, and 12 question issues were closed (27 total)

Improved the Webpack configuration with a number of changes, including splitting up the configuration into different files for different environment builds as well as an analysis build that uses webpack-bundle-analyzer. Also set Webpack up to split vendors into a separate bundle file. Added dev and prod folders to the local dist folder as a place for Webpack to output builds. Set up the codebase to use relative imports, which involved configuration for Jest, TypeScript, and Webpack. Added the PieChart component. Set up styled-components and began setting up some components as styled-components. Routed up a basic styled-components theme that will be expanded upon over time. Greatly improved ESLint config. Set up the Timer's 1-second increment functionality. Added click functionality to the Button component that allows it to change icons when clicked (from play icon to pause icon, for instance). Separated styles into their own parent folder (may change this over time).

### Updates
- updated readme.
- created Webpack folder and set up webpack-merge to be able to create separate dev and prod builds.
- configured Jest and Webpack to find relative-imported modules.
- added tsconfig-paths-webpack-plugin, webpack-bundle-analyzer.
- added type declarations for webpack-bundle-analyzer.
- set up relative imports in TypeScript config using baseUrl and paths properties.
- updated all import statements to use relative paths.
- added PieChart component.
- set up Dashboard, PieChart, and Button as styled-components.
- wrapped app component in top-level div.
- greatly improved ESLint config.
- updated script names.
- added script to run webpack-bundle-analyzer.
- added webpack file to be used when analyze script is run.
- added dev and prod folders to dist folder.
- moved React development files to dist/dev.
- prepared separate index.html files for dist/dev and dist/prod.
- moved Webpack externals from webpack.common.ts to webpack.dev.ts.
- added Webpack splitChunks config to separate vendors into their own bundle file.
- updated Timer state from string to number.
- added constructor and initTimer methods to Timer, allowing the Timer to start incrementing time on page load.
- routed up PieChart to Dashboard.
- added handleClick prop to Button component to accept function passed down from parent that will fire when the Button component is clicked.
- added SVG elements in Button component to change the icon that is used for the component (handled by click at the moment).
- added buttonType state to Timer component and initialize it as 'start'.
- added setButtonType method to Timer component that is passed to Button component to fire on Button click.
- added styles folder to moduleNameMapper in package.json so that Jest knows where to find style files.
- wrapped App component in styled-components ThemeProvider and passed it custom theme.

## Release 0.3.0
Sprint 3 / January 2, 2020

### 0 bug, 2 documentation, 16 enhancement, and 21 question issues were closed (39 total)

Restructured overall `src` folder structure. Added Timer and Button components. Used TypeScript interfaces and generics to allow some of these components to handle managing their own state and accepting props from parent components. Set up snapshot testing. Added page components folder, and added the Dashboard page component.

### Updates
- added --watchAll to test script.
- added alwaysStrict: true to TypeScript config.
- moved components to top level of components folder.
- added Timer and Button components.
- turn Timer component into a stateful component, incorporating TypeScript interfaces and generics to set up the component's state.
- gutted App component boilerplate.
- added packages react-test-renderer, styled-components, and webpack-merge.
- added type declarations for react-test-renderer, ESLint, and styled-components, and webpack-merge.
- added snapshot tests for App.tsx and Timer.tsx.
- move all tests to spec folder.
- updated packages.
- add coverage folder to .gitignore.
- added coverage tracking to yarn test script.
- added paragraph on current toolchain to readme.
- added Dashboard page component.
- routed App, Dashboard, and Timer components together.
- added tests for proposed functionality for Timer component.
- added sprints markdown file to the docs folder, outlining how the project is iterated upon from one sprint to the next.
- route up props and state to Timer and Button components.

## Release 0.2.0
Sprint 2 / December 19, 2019

### 0 bug, 1 documentation, 11 enhancement, and 13 question issues were closed (25 total)

Improved and extended TypeScript integration. Added Jest config and the first test. Added minor improvements to Webpack config, including beginning implementations of webpack-dev-server.

### Updates
- updated readme.
- added ts-node and type declarations for Node, Webpack, and webpack-dev-server to allow for Webpack config using ES6 and TypeScript.
- update to importing only render method from reactDOM.
- added type declarations for Jest and styled-components.
- added TypeScript preprocessor for Jest.
- added Jest config.
- added test script.
- updated React html container id from 'example' to 'root'.
- added tests for index.tsx.
- added webpack-dev-server.
- added start script.
- added webpack-dev-server config in webpack config, allowing for webpack-dev-server to work and hot reload.
- added noImplicitReturns to tsconfig.

## Release 0.1.0
Sprint 1 / December 1, 2019

### 3 bug, 3 documentation, 15 enhancement, and 11 question issues were closed (31 total)

This being the first two weeks working on this project, most of the work done has been focused around development setup and getting the various parts of the toolchain to play nicely. React, TypeScript, Webpack, ESLint, and Jest were added and configured. This is an ongoing process.

### Updates
- set up git flow branch scheme.
- initialized npm project inside repo.
- added Jest.
- added .gitignore file.
- added node_modules to .gitignore.
- added docs folder.
- added project board to GitHub.
- added description to project.
- added Webpack and webpack-cli.
- added React and ReactDOM.
- added type declarations for React and ReactDOM.
- added TypeScript.
- added ts-loader and source-map-loader for Webpack and TypeScript integration.
- added TypeScript config file.
- added dist folder for Webpack builds.
- added dist folder to .gitignore.
- added src folder for source code Webpack pulls from.
- added index.html as main browser entry point for Webpack bundle (dist/main.js).
- added Webpack config.
- added App.tsx and index.tsx.
- added build script to package.json.
- added TypeScript-ESLint dev dependencies.
- added ESLint config.
- update to importing only render method from ReactDOM.