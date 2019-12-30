# changelog

## Release 0.3.0 (planned)
Sprint 3 / January 2, 2020

### Updates
- added --watchAll to test script.
- added alwaysStrict: true to TypeScript config.
- moved components to top level of components folder.
- added Timer component.
- gutted App component boilerplate.
- added react-test-renderer.
- added type declarations for react-test-renderer, ESLint, and styled-components.
- added snapshot tests for App.tsx and Timer.tsx.
- move all tests to spec folder.
- updated packages.
- add coverage folder to .gitignore.
- added coverage tracking to yarn test script.
- added paragraph on current toolchain to readme.
- added styled-components.
- added Dashboard page component.
- routed App, Dashboard, and Timer components together.

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