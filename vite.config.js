/*
config tells Vite where to look for our project and
how the development server
should behave (pulling from the src folder with hot reload
*/
const path = require('path');

export default {
    root: path.resolve(__dirname, 'src'),
    //Set up Bootstrap’s Sass import
    resolve: {
        alias: {
          '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
      },
    server: {
        port: 3000,
        hot: true,
    },
};