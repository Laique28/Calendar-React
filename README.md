# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



## Table of Contents
- [Project Overview](#project-overview)
- [Components](#components)
- [Context](#context)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)

## Project Overview
This project is a fully functional calendar application designed to allow users to manage and organize events. It provides a clean and simple interface with the ability to navigate through months, view events for specific days, and create new events. The application also includes authentication features.

## Components

### `components/`
The `components` folder contains the UI elements that make up the calendar.

- **CalendarHeader.js**: The header section of the calendar, including navigation buttons to switch between months.
- **CreateEventButton.js**: A button that opens a modal to create a new event.
- **Day.js**: A component representing each day in the calendar grid.
- **EventModel.js**: A modal window for creating or viewing events.
- **Labels.js**: Displays labels for the days of the week.
- **Login.css**: Contains the styling for the login page.
- **Login.js**: A login form for user authentication.
- **Month.js**: Displays the current month view with all the days.
- **SideBar.js**: A sidebar for navigation and other features.
- **SmallCalendar.js**: A smaller calendar component used for quick navigation or as part of a larger layout.

## Context

### `context/`
The `context` folder contains the global state and context wrappers to manage application-wide data.

- **ContextWrapper.js**: Wraps the application and provides global state using the context API.
- **GlobalContext.js**: Defines the global context to manage states like events, authentication, and more.

# Login Details

### `Admin Login`
The `admin`  Credentails Are:

- **Username : admin**
- **Password : admin**

### `User Login`
The `user`  Credentails Are:

- **Username : user**
- **Password : user**

## Setup and Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>


2. Navigate into the project directory:
   ```bash
    cd <project-directory>

3. Install dependencies:
   ```bash
    npm install

4. Run the application:
   ```bash
    npm start
The app will now be running at http://localhost:3000.

# Usage
## Authentication: 
Users must log in to access the calendar and manage events.

## Creating Events: 
Use the "Create Event" button to open the modal and add events to the calendar.

## Navigation: 
Use the header or sidebar to navigate between different months or days.

## Viewing Events: 
Click on a specific day to view events for that day.