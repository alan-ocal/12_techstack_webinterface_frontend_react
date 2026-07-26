# esirgeyen ve bağışlayan ❤️ Allah'ın (c.c) adıyla - 12
This is a React fundamentals notes focused on flow of the react app, commands, technology stack used in react, files and folder structure, testing and CLI
## sections
- [1_background](#1_background)
    - [spa](#spa)
    - [server_side_application](#server_side_application)
- [2_description](#2_description)
    - [manipulating_dom_elements_efficiently](#manipulating_dom_elements_efficiently)
    - [async_operations](#async_operations)
    - [thinking_in_components](#thinking_in_components)
    - [custom_components](#custom_components)
- [3_setup](#3_setup)
    - [1_CRA_depreciated](#1_CRA_depreciated)
        - [why_do_not_use](#why_do_not_use)
    - [2_vite](#2_vite)
        - [setup_Vite_project](#setup_Vite_project)
        - [Start the development server](#start-the-development-server)
    - [3_full_stack_react_framework_setup](#3_full_stack_react_framework_setup)
- [4_project_folder_structure](#4_project_folder_structure)
    - [app_jsx](#app_jsx)
    - [index_css](#index_css)
    - [app_css](#app_css)
- [5_flow_of_the_program_tbc](#5_flow_of_the_program_tbc)
- [6_TDD](#6_TDD)
    - [description](#description)
    - [install_configuration](#install_configuration)
    - [Adding New Tests](#adding-new-tests)
    - [screen](#screen)
    - [categories_of_query_types](#categories_of_query_types)
- [7-CLI_Jenkins](#7-CLI_Jenkins)    
- [keywords](#keywords)

## 1_background
### SPA
- React is a framework released by Facebook for creating `SPA(Single Page applications`
![image](imgs/1_background/react_intro.png)
- It is a client side open-source JavaScript library used to create user interfaces in a declarative and efficient way.
- It is a <span style="color: green;">component-based front-end library </span> responsible only for the view layer of a Model View Controller (MVC) architecture.
- It is used to create modular user interfaces and promotes the development of <span style="color: green;">reusable UI components</span> that display dynamic data.
### Server_Side_Application
- Most web applications traditonally `Server Side Applications`. The server holds the business logic, stores data and 
renders the website to the client. When client clicks on a link, it sends a request to the server, and 
the server will handle the this request and send back a response with `html code` which the browser will render and be viewed by the user
- The problem here is that with this approach, server receives a lot of requests
    - when we click on `Home page`, `About page`, `Blog`; Server Side Applications consist of independent HTML pages and
  when a user navigates these pages, the browser would request and load different HTML documents.
    - too many requests, responds  bring upon a lot of time and resources spent on these tasks lead to a slow feeling of web pages
## 2_description
 - In React, we don't always have to load new pages each time there is an action from the user. A user still clicks on variuos links in a SPA
 However, this time, the client handles the requests on its own and will re-render the html page through Javascript so the server is left out here,
 unless data from the server is needed. This is much fasteras you don't need to send data over the Internet.
 - The `client` doesn't have to wait for the response, and the `server` doesn't have to render the response

### manipulating_DOM_elements_efficiently
- Loading and unloading different views of the same page involve querying and manipulating DOM elements.
Such `DOM operations` involve adding children, removing subtrees and can be really slow. This is where React addresses this
shortcoming in `manipulating DOM elements efficiently`. React does this by updating the browser DOM for us.
- With React, we don't interact with the DOM directly. Instead, we interact with a `virtual DOM` which React uses to construct the actual DOM
The virtual DOM is made up of React elements (which we specify in `JSX`) which 
![image](imgs/2_description/virtual_DOM_specified_in_jsx.png) look similar to HTML elements but are
actually `Javascript objects`. It is much faster to work with Javascript objects than the DOM API directly.
- We make changes to the Javascript object (the virtual DOM) and `React renders` those changes for us

### async_operations
- When we do make server requests, we do it asynchronously, which means we `re-render the page instantly to the user` and 
then wait for the new data to arrive and incorporate it and re-render only the required view when the data arrives thus providing a fluid experience.
![image](imgs/2_description/async_operations.png)

### thinking_in_components
- `component`: a React component is a class that contains a JSX template that ultimately outputs HTML elements. It has it is own data and logic to control the JSX template

- they are the basic building blocks of React applications. A component controls the a portion of a screen, a view through its associated JSX template

- components can also contain other components. For example, in `products component` where we display a list of products, we do so using multiple `product` components. Also, in each `product` component, we can have a `rating` component

- we define our component's application logic(what it does to support the view) inside a class. The class `App.jsx (Root component)` interacts with the view through `properties and methods`.

- In a React component, implementing the `render()` method is required. When `called by main.jsx`, it should return a single React element. This element can be either a representation of a `native DOM component`, such as `<div />`, or another composite component that we have defined ourselves.

- React functional component in `App.jsx returns JSX`,` which describes the UI React should render.  In our App component, it returns:

    - A React fragment: <>...</>
    - Several HTML-like elements such as `<section>, <div>, <h1>, <button>, and <img>`
    - Dynamic values such as {count}
    - Event behavior such as onClick

#### custom_components
- 1- create custom functional component `Products.jsx`  ![image](imgs/2_description/custom_component_cra_vs_vite_styles.png)
- 2- import it into `App.jsx`.  ![image](imgs/2_description/import.png)

Because `Products.jsx` is in the same src folder, Vite resolves the extension automatically.
## 3_setup
### 1_CRA_depreciated
- `npx create-react-app my-app`
The React documentation now recommends using modern frameworks or build tools instead.

#### why_do_not_use
CRA has several drawbacks compared to newer tooling:

- Slower development server and builds.
- `Webpack` configuration is difficult to customize.
- Less active maintenance.
- Doesn't take advantage of modern bundlers like `Vite`
- Lacks built-in support for features such as `server-side rendering (SSR)` and `React Server Components.`
### <span style="color: green;">2_vite </span>
#### setup_Vite_project
- `Vite` is a build tool that aims to provide a faster and leaner development experience for modern web projects.

- Prefer kebab-case (my-app) for the project/package name — it’s the most compatible convention.

`npm create vite@latest crud-operations-app`
- ✔ Select a framework: React
![image](imgs/3_setup/framework.png)
- ✔ Select a variant: JavaScript (or TypeScript)
![image](imgs/3_setup/variant.png)

This will create our React project folder in the directory with two dependencies. 
 ```
  "dependencies": {
    "react": "^19.2.7",
    "react-dom": "^19.2.7"
  },
```   
#### Start the development server
- `npm run dev`
- http://localhost:5173/ 
- ![image](imgs/3_setup/run_Vite_project.png)
- ![image](imgs/3_setup/intellij_npm_run_dev.png)

### 3_full_stack_react_framework_setup
`npx create-next-app@latest`
`npm run dev`
`npx create-react-router@latest`
![image](imgs/3_setup/full_stack_react_framework_setup.png)

## 4_project_folder_structure
![image](imgs/4_project_folder_structure/project_folder_structure.png)
- node_modules          // the folder is created by Node.js
                        // and puts all `third party moudules (dependencies)` listed in `package.json`
- src/
    - ├── main.jsx      // Entry point
    - ├── App.jsx       // Root component
    - ├── index.css     // Global styles
    - ├── App.css       // Component-specific styles for the App component

- package.json          // is the node package configuration that lists
                        // the third party packages our project uses
![image](imgs/4_project_folder_structure/app_vs_main_jsx.png)

### app_jsx
- Every React application has at least one component, the `root component`: `React functional component named App in App.jsx`
- React converts this JSX into React elements and ultimately `renders them into the DOM element with 
`id="root" from src/main.jsx`.
- 
```
function App() {
  return (
    <>
      {/* UI elements */}
    </>
  )
}
```
- In `App.jsx`, `className` is how you assign CSS classes to an element. It maps to the HTML class attribute when the element is rendered.
    - Example:
    `<div className="hero">...</div>`
    - This renders to:
    `<div class="hero">...</div>`
    ![image](imgs/4_project_folder_structure/className.png)
### index_css  
- Global styles for the entire application
- Applied to the root HTML file (usually `index.html`)
- Typically contains:
   - Reset/normalise styles (margins, paddings, font defaults)
   - Global colour schemes and typography
   - Base HTML element styles
   - CSS variables or theme definitions
- Loaded once when the app initialises
- `Affects all components across the app`
### app_css
- Imported directly into the `App.jsx component`
- Typically contains:
    - Layout styles for the App component structure
    - Styles specific to that component's UI
    - Component-level customizations
    - `Only applies to elements within the App component`
## 5_flow_of_the_program_tbc
When we build a `user interface with React`,
- 1- first, break it apart into pieces called `components`. 
- 2- then, describe the different `visual states for each of the components`
- 3- <span style="color: magenta;">tbc. </span>
## 6_TDD
### description
- TDD in React uses the `Red–Green–Refactor` cycle applied to `components, hooks, and interactions` — we write a test that expresses the desired behavior before writing the `component code`, implement the minimal code to make the test pass, then refactor with confidence

- A good fit is `Vitest` with `React Testing Library`: Vitest runs naturally with Vite, while Testing Library verifies what users see rather than implementation details. 

![image](imgs/6_TDD/apptest_jsx_example.png)

### install_configuration
- 1- adding the test dependencies
`npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom`
![image](imgs/6_TDD/adding_test_dependency_vitest.png)
- 2- configuration
![image](imgs/6_TDD/configuration.png)
- 3- `npm test`

### Adding New Tests
Create a new `*.test.jsx` file in the `src` directory and follow this pattern:
```jsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Component from './Component'

describe('Component', () => {
  it('should render something', () => {
    render(<Component />)
    expect(screen.getByText('text')).toBeInTheDocument()
  })
})
```
- ### screen
![image](imgs/6_TDD/screen.png)
![image](imgs/6_TDD/render.png)

### categories_of_query_types
![image](imgs/6_TDD/categories_of_query_types.png)

## 7-CLI_Jenkins


## Keywords
- ES6 features, 
- virtual DOM, 
- React canvas,
- Reusable components,
- Babel, Webpack (build tools) which transpiles (source-to-source compiling) ES6 code into ES5 code so that can run in current browsers. The build is handled by `Vite rather than Webpack/Babel`.
- Oxlint (linter) replacement for ESLint


