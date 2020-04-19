# changelog

## Release 0.11.0
Sprint 11 / April 26, 2020

### Updates

- added blog section to documentation.
- added login failure message on Login page.
- updated Alignment documentation.
- added bar graphs to Graph component.
- updated theme and global styles.
- animated Spinner component.
- added AWS Cognito Identity SDK mock for testing auth flow.
- added tests for Login page and Timer component.
- updated ESLint config.
- added isAuthorized boolean in App component to manage authorization across the application.
- updated React Router Route syntax.
- added PrivateRoute component to handle routes that require authorization.
- passed in isAuthorized prop to Header component to update Header elements based on authorization.
- updated formatting in Dashboard component.
- passed in setIsAuthorized useState function to Login page to manage App-wide authorization.
- updated Login tests to take in setIsAuthorized prop.
- added dev environment variables to webpack prod config (temporary until prod credentials are set up).
- added buildspec.yaml for AWS CodeBuild.
- updated buildspec to not --watch for tests and halt progress in AWS CodePipeline.
- updated buildspec to use $CODEBUILD_SRC_DIR environment variable to find output files.
- updated buildspec to pull in env.ts from S3 bucket.
- moved buildspec S3 env.ts path to CodeBuild environment variable.
- updated artifacts file path in buildspec.
- added discard-paths field to artifacts section in buildspec.
- updated readme.

<hr />

## Release 0.10.0
Sprint 10 / April 12, 2020

### 0 bug, 1 documentation, 4 feature, and 3 question issues were closed (8 total)

Added some additional time features on the Dashboard, including displaying the total time recorded for the day as well as stacking records that have the same label. Moved all sensitive credentials from the codebase to a local env.ts file that gets loaded in with Webpack. Added Spinner component to display while user is being authenticated in Cognito on the Login page.

### Updates

- added total daily time to Dashboard.
- updated readme.
- added tests for Timer and Dashboard.
- made Form's Input a separate component.
- removed time.ts utility file.
- rename Time component's constructStringFromSeconds method to getStringFromTimeUnits.
- refactored Timesheet and Record components, and improved how these components are rendered from the Dashboard.
- moved constructStringFromSeconds from time.ts to Dashboard component and rename it getStringFromSeconds.
- updated Dashboard reducer to check if a record already exists with the same label as the incoming payload. This stacks records with the same label into one displayed Record component.
- added node environment to ESLint as well as some new linting rules.
- added env.ts to move all environment-specific, sensitive credentials to local, non-checked file.
- updated ts config.
- added Spinner component to Login page to temporarily display while authentication is being checked in Cognito.
- moved Cognito credentials from Login page to external env.ts file.
- updated webpack.dev.ts to use EnvironmentPlugin to inject NODE_ENV variable into the local build.

<hr />

## Release 0.9.0
Sprint 9 / March 29, 2020

### 0 bug, 0 documentation, 11 feature, and 6 question issues were closed (17 total)

Added docz package for documentation. Routed up initial authentication flow for AWS Cognito, handling `onSuccess`, `onFailure`, and `newPasswordRequired` possibilities. The Login page now receives JWT tokens on successful login. Added a text label that can be set for each individual time record. Added React.FC typing to all functional components. Doubled the number of tests, and generally improved testing. Set up individual Days in Timeline to display the total number of records. Set up form components to be controlled components. Added `time.ts` utility file to hold global time-based functions.

### Updates

- added .docz to .gitignore.
- added frontmatter to changelog and sprints markdown files.
- added docz package to begin documenting API of this project.
- added Alignment.mdx and components.md files.
- updated ESLint config.
- added tests for Timer component.
- added test user to Cognito test user pool.
- updated Timesheet component so that individual records also render the label for the record.
- added label to records.
- added tests for Dashboard page.
- added React.FC typing to all functional components.
- updated action name button clicked to stop in Dashboard component.
- updated Timesheet textbox to become empty when Timer's stop button is clicked.
- updated incoming props to come in destructured in some places.
- removed unnecessary anonymous function invocations in certain component props.
- updated naming conventions for Dashboard state store.
- moved default case underneath 'stop' case in Dashboard reducer.
- updated Handleblur function in Dashboard component to check for `typeof` ref's value.
- added RestoreAllMocks() as teardown after each test is run.
- updated Input component in Form to accept placeholder and password props.
- updated Login page to pass in placeholder and password props to Form.Input components.
- updated global background color.
- updated Form styles.
- added recordCount prop to Timeline Day components to pass in and display the number of records recorded for the day.
- updated input element on Dashboard page to be a controlled component.
- refactored and simplified Timer's `useEffect` / `setInterval` logic.
- added conditional autocomplete prop to Form Inputs in the event that the Input is of type password.
- updated styles for Form submit button.
- renamed buttonPaths utilities file to svg.
- added time.ts utilities file.
- added constructStringFromSeconds utility function.
- updated Timesheet records to use utilities' constructStringFromSeconds function to display records as time strings.
- added amazon-cognito-identity-js and aws-sdk packages.
- added onSubmit prop to Form submit input.
- added onChange prop to Form Inputs.
- added AWS Cognito newPasswordRequired, onSuccess, and onFailure authentication flows to Login page.

<hr />

## Release 0.8.0
Sprint 8 / March 14, 2020

### 0 bug, 0 documentation, 8 feature, and 4 question issues were closed (12 total)

Implemented first uses of memoization in the app, specifically in the way buttons render. Updated Timeline component to render the date based on the local timezone. Set up initial dev user pool in Amazon Cognito. Implemented first uses of context in the app to pass state from the Dashboard page to nested components. Implemented first uses of global state and useReducer in the app to be able to update and pass down state between the Dashboard page and its child components. Updated Timer and Timesheet components to share state -- when the Timer component stops the time, the Timesheet will rerender with a new time record based on this stopped time. Updated Timesheet to render a dynamic number of Time Records based on how many records there are.

### Updates

- turned off max-statements rule in ESLint config.
- exported type definition for Button component to be used in Timer component.
- refactored Timer component's stopTimer and startTimer functions into one toggleTimer function.
- memoized Button child components inside Timer component to prevent unnecessary rerenders.
- added test file for styled Alignment component.
- changed name of Timeline.Date component to Timeline.Day.
- updated Timeline.Day component to take in a day prop and render the correct date for the specific Day component based on this value.
- updated Timeline styles.
- added --notify to test script so that OS notifies when tests finish.
- created Amazon Cognito dev user pool to hold user auth data.
- passed DashboardContext to Timesheet component.
- created DashboardContext in Dashboard page component.
- passed down Dashboard page's useReducer dispatch to Timer, allowing the Timer to update the Dashboard store.
- passed Dashboard's store to Timesheet where it will render within that component.
- updated DashboardContext to use DashboardContextType, and updated this type's dispatch to use React.Dispatch with custom type Action.
- created Dashboard store reducer.
- created Dashboard store.
- used useReducer in Dashboard to pass Dashboard store and dispatch to children.
- wrapped Timer and Timesheet in DashboardContext.Provider.
- updated Timer dispatch to send total timer seconds as the payload.
- updated Timesheet to render dynamic amount of components depending on how many records are stored in the Dashboard store.
- updated Timeline to not use UTC Date methods to get time string.
- added Section component to create flexbox rows on pages.
- added margin to Tile components.
- updated packages.

<hr />

## Release 0.7.0
Sprint 7 / February 29, 2020

### 0 bug, 0 documentation, 22 enhancement, and 5 question issues were closed (27 total)

Made a variety of styling improvements, including improved global and theme styles, Tile styles, Header styles, Timer styles, Button styles, Page styles, Form styles, and Timesheet styles. Created/refactored the Form, Timesheet, and Timeline to be compound components. Added an Alignment component to wrap other components and provide alignment styles to these wrapped components. Converted all imports to be defaults when appropriate. Converted remaining class components to function components. Began using the type definition React.FC to label function components.

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
- updated theme primary color.
- added test file for Login page.
- updated all component imports to defaults where appropriate.
- updated Timesheet styles.
- converted remaining class components to function components.
- added Graph component and utilized type definition React.FC for this component.

<hr />

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

<hr />

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

<hr />

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

<hr />

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

<hr />

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

<hr />

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