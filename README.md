# orders_products_dzen

This project is a React application that manages orders and products, utilizing Redux for state management and Vite for the build tool. The application provides functionalities such as viewing orders and deleting orders or products. The project is set up with a JSON server for handling mock API requests and a WebSocket server for real-time updates.

## Table of Contents

- [orders_products_dzen](#orders_products_dzen)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Scripts](#scripts)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
  - [PropTypes](#proptypes)
  - [Styling](#styling)
  - [Usage](#usage)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/orders_products_dzen.git
    cd orders_products_dzen
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Scripts

- `dev`: Starts the development server using Vite.
    ```sh
    npm run dev
    ```

- `build`: Builds the project for production.
    ```sh
    npm run build
    ```

- `lint`: Runs ESLint to check for linting errors.
    ```sh
    npm run lint
    ```

- `preview`: Previews the built project.
    ```sh
    npm run preview
    ```

- `json-server`: Starts the JSON server to serve mock API data.
    ```sh
    npm run json-server
    ```

- `ws-server`: Starts the WebSocket server.
    ```sh
    npm run ws-server
    ```

## Dependencies

- `@reduxjs/toolkit`: "^2.2.6"
- `axios`: "^1.7.2"
- `json-server`: "1.0.0-beta.1"
- `react`: "^18.3.1"
- `react-dom`: "^18.3.1"
- `react-redux`: "^9.1.2"
- `react-router-dom`: "^6.25.1"
- `redux`: "^5.0.1"
- `redux-thunk`: "^3.1.0"
- `socket.io`: "^4.7.5"
- `socket.io-client`: "^4.7.5"

## Dev Dependencies

- `@types/react`: "^18.3.3"
- `@types/react-dom`: "^18.3.0"
- `@vitejs/plugin-react`: "^4.3.1"
- `eslint`: "^8.57.0"
- `eslint-plugin-react`: "^7.34.3"
- `eslint-plugin-react-hooks`: "^4.6.2"
- `eslint-plugin-react-refresh`: "^0.4.7"
- `vite`: "^5.3.4"

## Styling

The styling for this project is done using CSS modules. Each component has its own associated CSS file that handles its styling. For example, the `OrderDetails` component has a corresponding `OrderDetails.css` file.

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```

2. In a separate terminal, start the JSON server:
    ```sh
    npm run json-server
    ```

3. Optionally, start the WebSocket server:
    ```sh
    npm run ws-server
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

This README provides an overview of the project structure and how to get started with development. For more detailed documentation, refer to the source code.