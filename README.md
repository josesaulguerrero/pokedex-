# Pokedex

This is a pokedex, an app which fetches data from the [pokeapi](https://pokeapi.co) and displays a card for every single pokemon registered in the API; you can through the different pages using the pagination buttons at the bottom part and you can also see more detailed information on each pokemon by clicking on its card!

## Table of contents

-  [Overview](#overview)
-  [The project](#the-project)
-  [Screenshot](#screenshot)
-  [Links](#links)
-  [My process](#my-process)
-  [Built with](#built-with)
-  [What I learned](#what-i-learned)
-  [Continued development](#continued-development)
-  [Useful resources](#useful-resources)
-  [How to run the project](#how-to-run-the-project)
-  [Author](#author)

## Overview

### The challenge

Users should be able to:

-  Navigate through the different pages using the buttons at the bottom part or typing the corresponding URL.
-  See the appropriate design on every screen.
-  Search for a certain pokemon using its ID or name.
-  See detailed info on each pokemon by clicking on their card.
-  Install the app and see the information that has already been fetched from the API even when offline.

### Screenshot

![screenshot](https://i.postimg.cc/bYnbW84W/special-pokedex-netlify-app-pokemons-0.png)

### Links

-  [repository](https://github.com/josesaulguerrero/pokedex-)
-  [Live site URL ](https://special-pokedex.netlify.app/)

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  [Yarn](https://yarnpkg.com/) - Node package manager
-  [create-react-app](https://create-react-app.dev/docs/) - To create a React setup ready to run.
-  [React](https://reactjs.org/) - JS library
-  [Redux](https://es.redux.js.org/) - State architecture for react.
-  [https://redux-saga.js.org/] - Redux middleware that allows you to perform asynchronous actions.
-  [TypeScript](https://www.typescriptlang.org/docs/) - To type my components and avoid production bugs.
-  [Workbox](https://developers.google.com/web/tools/workbox/guides/get-started) - For managing cache, service workers and turning the app into a PWA.

### What I learned

Building this project helped me learn to use and improve my knowledge of some React and JS tools, such as:

-  Setting up husky alongside Prettier to make my code so much better :D
-  Integrating redux, react-redux and redux-saga to manage my state and perform async actions.
-  Creating a .prettierrc file to set up some code conventions.
-  Adding static typing with TS to my service-workers and redux code.
-  Forwarding refs from one component to another.
-  Creating a custom hook to lazy-load the images that come from the API.
-  Writing a very reusable pagination component that covers many edge cases.
-  Using TS features in a React project and typing my components.
-  Managing my service workers with Workbox.

### Continued development

-  I integrated husky alongside prettier to prettify my code every time that I wanted to commit new changes.

-  I used a .env file to save the API base URL.

-  To manage the app state I used redux, a pure-JS library that tells you how you should manage your state and also provides you with a store where you can keep it.

-  To fetch the data from the API (which is an asynchronous process) I used redux-saga, a middleware that allows you perform this kind of actions in a readable way.

-  To handle my routes I needed react-router-dom, a library that provides you with some components that make route-management and navigation in general very easily.

-  TypeScript is a really nice super set of JS that introduces lots of cool features that helped me make my React code much safer, which leads to less room for bugs.

-  Webpack helped me start a development environment with DevServer and create bundles of code which are optimized for a production environment.

-  To manage my service workers, I used Workbox, a set of libraries that google provides to help you covert your apps into PWAs that can be installed like a native app and work even when offline.

-  Implemented the `@media (hover: hover) {}` CSS media query, which is used to detect if the user's device has a cursor, to add hover transitions.

### Useful resources

-  [Creating a pagination component in react](https://www.youtube.com/watch?v=IYCa1F-OWmk) - This video helped me figure out how I could create my own pagination component, watching it was very helpful.

-  [Setting up husky commits](https://github.com/typicode/husky) - This is the official documentation on husky.

-  [Using TypeScript with Redux saga](https://vhudyma-blog.eu/add-redux-saga-with-typescript-to-your-react-application-january-2021/) - This was article really provided very interesting concepts on how to integrate redux saga (state manager) and TypeScript.

-  [Basic use of TypeScript with React](https://www.youtube.com/watch?v=jrKcJxF0lAU) - I found this video very interesting because it teaches you how you can use TS in your react projects to avoid getting bugs by simply typing your components, props, state, etc.

-  [How to integrate Workbox in your React App](https://www.youtube.com/watch?v=uKNLaleXztc&list=PLD8nQCAhR3tTXYOhau-RTfZQ4uGvco7XQ&ab_channel=ImranSayed-CodeytekAcademy) - These videos were really helpful as they helped me integrate all the workbox libraries into my existing application.

## How to run the project

1. You need to have NodeJS, NPM and Yarn installed in your computer. Follow these instructions to install Node and NPM: (Windows and Mac) [NodeJS](https://nodejs.org/en/download/) or (Linux) [NVM](https://github.com/nvm-sh/nvm). After you're done with the previous step, go to your terminal and install Yarn: `npm install -g yarn`

2. Then you would need to install the necessary dependencies for this project, you can do it by running: `yarn install`

3. Finally open the project folder on your terminal and run: `yarn start` and you're ready to go, it will open the development environment.

## Author

-  Website - [Jose Saúl Guerrero Serrano](https://joseguerreroserrano.netlify.app/)
-  Github - [@josesaulguerrero](https://github.com/josesaulguerrero)
