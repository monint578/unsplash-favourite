# Unsplash
This application is built with React & Typescript.

[Click me to see demo!](https://unsplash-favourite.pages.dev/)

## ✨ Features
* Data is fetched from [Unsplash.com](https://unsplash.com/documentation) API
* You can view more details and like images. All liked images ids is saved in local storage
* All favourite images are displayed in "Favourite images" page
* "Styled Components" is used for styling
* ESLint is used for analyzing problems in code. Also it fixed the code.
* React Router v6 is used for routing and navigation.

## 🚀 Building and Running the App

1. ```sh
   npm install
   ```
2. To run locally: 
   ```sh
   npm start
   ```
3. To build for production:
   ```sh
   npm run build
   ```
4. To fix code:
   ```sh
   npm run lint-fix
   ```
   ### ❗ Important

   This app is using API Access Key 🔑. To get the Access Key you have to create free account in Unsplash. After that follow:
   * Create a new  ```.env  ``` file in the project's root directory
   * Add following line to the file: ``` REACT_APP_API_KEY="YOUR ACCESS KEY" ```