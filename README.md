# Portfolio Website

This is a portfolio website built using React.js.

## Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/portfolio-website.git
```

Next, navigate to the project directory and install the dependencies:

```bash
cd portfolio-website
npm install
```

## Usage

To start the development server, run:

```bash
npm start
```

The website will be available at `http://localhost:3000`.

## Structure

The main entry point of the application is `src/index.js`, which renders the `App` component from `src/App.js`.

The `App` component uses `react-router-dom` to route between different pages of the application. The routes are defined in `src/App.js` and the corresponding components are in the `src/components` directory.

The `Navbar` and `Footer` components are used in every page of the application.

The images used in the `About` and `Projects` pages are located in the `src/assets/images` directory.

The main styling for the application is provided by `src/App.css`.

The `public/index.html` file is the main HTML file and includes a div with the id "root" which is used to render the React application.

The `public/favicon.ico` and `public/manifest.json` files provide the favicon and metadata for the web app.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)