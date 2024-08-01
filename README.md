# orders_products_dzen

This project is a React application that manages orders and products, utilizing Redux for state management and Vite for the build tool. The application provides functionalities such as viewing orders, managing products, and real-time updates using WebSockets.

## Table of Contents

- [orders_products_dzen](#orders_products_dzen)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Scripts](#scripts)
  - [Environment Variables](#environment-variables)
  - [Styling](#styling)
  - [Usage](#usage)
  - [Testing](#testing)

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
- `build`: Builds the project for production.
- `lint`: Runs ESLint to check for linting errors.
- `preview`: Previews the built project.
- `json-server`: Starts the JSON server to serve mock API data.
- `ws-server`: Starts the WebSocket server.
- `format`: Runs lint and prettier to format the codebase.

## Environment Variables

Before running the project, ensure you have a `.env` file in the root of the project with the following variables:

- `VITE_API_URL`: Base URL for the API
- `VITE_SOCKET_URL`: WebSocket server URL

## Styling

The project uses CSS Modules for styling. Each component has a corresponding CSS file, and styles are scoped locally to each component. For example, the `OrderDetails` component has a `OrderDetails.module.css` file.

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

## Testing

The project is set up to use [testing-library](https://testing-library.com/) and [Jest](https://jestjs.io/) for unit and integration testing. To run tests:

```sh
npm run test
