# Udacity's project 5: Travel App
You can see a picture, weather, temperature of your destination.
## The goal of this project is to practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using 3APIs and creating requests to external urls
http://www.geonames.org/export/web-services.html
https://www.weatherbit.io/account/dashboard
https://pixabay.com/api/docs/#api_search_images

## Getting started

- Dependencies
  - "@babel/core": "^7.13.15",
  - "@babel/plugin-transform-modules-commonjs": "^7.13.8",
  - "@babel/preset-env": "^7.13.15",
  - "babel-loader": "^8.2.2",
  - "body-parser": "^1.19.0",
  - "clean-webpack-plugin": "^3.0.0",
  - "cors": "^2.8.5",
  - "css-loader": "^5.2.1",
  - "html-webpack-plugin": "^3.2.0",
  - "jest": "^26.6.3",
  - "mini-css-extract-plugin": "^1.4.1",
  - "node-fetch": "^2.6.1",
  - "node-sass": "^5.0.0",
  - "optimize-css-assets-webpack-plugin": "^5.0.4",
  - "sass": "^1.32.8",
  - "sass-loader": "^10.1.1",
  - "style-loader": "^2.0.0",
  - "terser-webpack-plugin": "^4.2.3",
  - "webpack-dev-server": "^3.11.2",
  - "workbox-webpack-plugin": "^6.1.5"

- Brief about important files in your project

  - setSubmit.js
  - validateDate.js
  - postTripDate.js
  - updateUI.js

- How to run the project in development mode
  - npm run build-dev

- How to run the project in production mode
  - npm run build-prod

## Installation

- Create a .env file to store API keys
  - Configure your local environment
    - GEONAMES_USERNAME=
    - WEATHERBIT_APIKEY=
    - PIXABAY_APIKEY=
- Use npm install to install all dependencies
- Use npm run build-dev to create dist folder
- Start server by running npm start
