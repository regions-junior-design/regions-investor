# Regions Personal Investment Platform
### Developed by:  Team DataBanks
Daniel Smith, 
Ross Cefalu, 
Hayden Smith, 
Trinh Do, 
Sid Balireddy 

## About 
Our project is to create a web-app  for young audience who need to learn how to invest, save, and budget their money in order to build wealth and save for the future. The application will aids users in creating custom investment and saving plans that fit their financial needs.  Our team will focus on providing a simple, yet powerful interface that can attract audiences who expect a seamless experience and expert financial advice.

## Pre-requisites

The following pre requisites are neccessary to run this application.

- Javascript: As a web application, you will need a compatible browser capable of running JavaScript. We suggest [Google Chorme](https://www.google.com/chrome/)

- Node: The node enviornement allows us to host our web app locally for development and testing. There are a variety of installation methods for node. We suggest following the official installer which can be found at [NodeJS](https://nodejs.org/en/)

- Firebase: Access to a our Firebase backend enviornment is neccessary for the web application to run. Appropriate credentials to connect to our established Firebase enviornment are provided in the `.env` file in the root of this repository.

- Git: (For developers) Git will be neccessary to manage the project and contents of this repository. See installation instructions for [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

<br />

## Download instructions

There are two ways which you can download this project from GitHub:

1. Simply download the repository as a .zip file from the repository homepage. After downloading, extract the file to a sutable location on your local machine and `cd` to the root directory of the project. Then proceed as described below.

2. For more experienced users you may clone the project directly from command line by running the following:

    `git clone https://github.com/regions-junior-design/regions-investor.git`

    This will place the repository contents in the working directory from command line, and this is the installation method recommended for developers.

<br />

## Dependencies

The following dependencies must be installed in the Node enviornment for thw web application to function. Dependencies and respective versions are listed below:

- @material-ui/core: 4.11.0
- @material-ui/icons: 4.9.1
- chart.js: 2.9.3
- d3-scale-chromatic: 2.0.0
- firebase: 7.19.1
- material-ui-popup-state: 1.6.1
- react: 16.13.1
- react-chartjs-2: 2.10.0
- react-dom: 16.13.1
- react-router-dom: 5.2.0
- react-scripts: 3.4.3
- react-scroll: 1.8.1
- recompose: 0.30.0

<br />

For ease of use these dependencies may be installed automatically with the following command: `npm install`

We reccomend using this command to install and manage the versions of all dependencies.

<br />

The user must also ensure that the correct Firebase envionrnment details are defined in the `.env` file, which will dynamically load these variables into the application on runtime. Reference your running Firebase enviornment to access all credentials neccessary.

These variables include:
- REACT_APP_API_KEY
- REACT_APP_AUTH_DOMAIN
- REACT_APP_DATABASE_URL
- REACT_APP_PROJECT_ID
- REACT_APP_STORAGE_BUCKET
- REACT_APP_MESSAGING_SENDER_ID

<br />

## Development

In the project directory, you can run these commands:

- `npm start`

    Runs the app in the development mode.<br />
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.<br />
    You will also see any lint errors in the console.

- `npm test`

    Launches the test runner in the interactive watch mode.<br />
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. 

<br />

## Build Instructions

In the project directory, you can run these commands:

- `npm run build`

    Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- `npm run eject`

    **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

    If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

    Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

    You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<br />

## Installation (Deployment)

The newly created `/build` folder contains all that is neccessary to deploy the web application to an enviornment.

There are a wide variety of ways which this application can be deployed. We leave this choice to the client as deployment into the existing ecosystem will gratly depend on the current cloud enviornment and security restrictions. However, some commonly used deplyment processes can be found [HERE](https://facebook.github.io/create-react-app/docs/deployment) 

<br/>

For purposes of testing deployment on your local machine, we recommend using a simple static HTTP server. Node conviently provides an easy to use static HTTP server which can be used from the project directly. Simply run:

- Begin by installing the server:
`npm install -g serve`<br />

- Start the server with this command:
`serve -s build`

- This command shown above will serve your static site on the port 5000. 

- The port can be adjusted using the `-l` or `--listen` flags: `serve -s build -l 4000`

- For help with server configuration run: `serve -h`

<br />

## Run instructions

With a properly hosted web application, the only step neccessary to run the application is to vist the static server address. If deploying with serve as described above, simply visit `http://localhost:5000` with a modern browser capable of running JavaScript.

If deployed by alternate methods, simply visit the host address defined at deployment time in a modern browser.

<br />

## Troubleshooting

Troubleshooting can be managed by using tools provided in the Node enviornment and in the browser. Google Chrome provides a robust set of developer tools, hence our reasoning for reccomending it. 

All events are logged the your running Node console during development.

Use browser developer tools by right clicking on the loaded web app in your browser and selecting inspect element. Notice that all events are again logged in console in both development mode and in deployed instances of the web application.

See below additional resources for managing and troubleshooting the application.

<br />

## Resources

Create React App documentation: https://facebook.github.io/create-react-app/docs/getting-started

Official React documentation: https://reactjs.org/

Advanced Configuration: https://facebook.github.io/create-react-app/docs/advanced-configuration

Material UI: https://material-ui.com/getting-started/faq/

Firebase Support: https://firebase.google.com/support


<br />
<br />
<br />

# Release Notes

