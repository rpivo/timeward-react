# changelog

## Release 0.7.0 (planned)
Sprint 7 / February 29, 2020

### Updates

- made Dashboard the catch-all default route for React Router so that this page is the first page users will see (unless they aren't registered or logged in).
- added global background color.
- updated Tile component styles to not have rounded corners when stretching the full width of the page.
- added TimeRecord component to represent singular time records inside the Timesheet component.
- added Timeward site heading to header.
- added Date component to be used as singular date objects inside Timeline component.
- added tests for Button component.
- update Header nav link styles for hover effects.
- added tests to Timer component.
- created compound form component.
- updated Timer and Button styles.
- removed Date Component file and combined Timeline component and Date component into a single compound component.
- routed up Header logo to be clickable Link that navigates to the Dashboard page.
- added Alignment component.
- wrapped Login Form in Alignment component.
- added min-height to Page component.
- refactored Timesheet and TimeRecord components to be compound component.
- updated Input component to be of type text.
- capitalized login form label.
- capitalize login form CTA text.
- updated styles for form component.
- updated global background color.

## Release 0.6.0
Sprint 6 / February 15, 2020

### 0 bug, 0 documentation, 11 enhancement, and 8 question issues were closed (19 total)

Added login page, and installed React Router to handle multiple routes. Created development DynamoDB tables that will eventually be used to hold Timeward data. Added Header component. Converted Timer component to use hooks. Added favicon. Converted all interfaces to be type aliases.

### Updates
- added styled-component for Timer.
- added Timesheet to same Tile as Timer.
- updated ESLint config.
- set up optional width prop to be passed to Tile styled-component.
- added Timeline component.
- converted all component interfaces to types.
- added stricter settings to TypeScript config.
- refactored Timer component from class to functional component that uses hooks.
- added Header component.
- added Page component as wrapper around pages.
- removed margins from body element.
- removed padding from Dashboard component.
- added react-router-dom and its matching types.
- added Router, Switch, and Route to App component to facilitate route switching.
- added Link components to Header component to facilitate route switching.
- added Login page.
- updated Webpack config for React Router routing.
- uninstalled webpack-merge due to typing issues.
- updated webpack env files to work without the use of webpack-merge.
- deleted webpack.common.ts.

## Release 0.5.0
Sprint 5 / February 1, 2020

### 1 bug, 2 documentation, 16 enhancement, and 6 question issues were closed (25 total)

Added all basic functionality to the Timer component, which is now able to start, stop, and pause. Updated styled-components config to allow for adding global styles. Improved testing by adding the Enzyme package as well as a global setup config. Began moving class components to function components in the process of moving entirely to hooks (this is still an ongoing process). Added a utilities folder to put globally used utility functions.

### Updates
- added GlobalStyle file to styles folder. This uses styled-components' createGlobalStyle to add global styles to the project. 
- set global SVG styles to inherit the width of their parent (may change this in the future).
- shrunk existing timer button down in size.
- updated naming convention for all style files to be *.styled.tsx.
- added multiline-comment-style rule to ESLint config to allow for quickly commenting out blocks of code.
- used parameter property in Timer component to set this.interval property on the Timer component which is for the timer interval.
- added startTimer, stopTimer, and pauseTimer methods to Timer component.
- made handleClick on first Timer Button conditional so that a different method fires depending on the Button's button type (which gets set in state and changes when the Button is clicked).
- removed dot notation rule from ESLint to allow dot notation escape hatch for TypeScript testing.
- added Jest setupTests file.
- added Enzyme to improve testing experience.
- added additional tests for Timer component.
- converted App and Button components from class components to function components.
- added excluded property to tsconfig.
- added Timesheet component.
- routed up Timesheet component to Dashboard page.
- added renderSwitch method to Button component to allow for three-way kind-switching between Stop, Pause, and Start icons.
- added utilities folder to Jest and TypeScript relative paths.
- replace long SVG path strings with abstractions, and move those strings to a separate utilities file buttonPaths.ts.
- update Timer component's time prop in state to be called seconds.
- added seconds to string conversion methods in Timer component to convert seconds to a time string.
- updated packages.
- removed unnecessary nested div element inside PieChart component.
- added Tile component and matching styled-component.
- wrapped timer component in tile component.
- added site-wide font styles.
- updated readme and linked changelog to it.

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