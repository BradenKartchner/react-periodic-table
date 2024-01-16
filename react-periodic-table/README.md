# React + @react-konva

https://konvajs.org/docs/react/index.html

Most responsive layout systems (flexbox, Bootstrap, etc.) use a maximum of 12 columns that wrap for responsive web design. Unfortunately, 12 columns is not enough to display the Periodic table (at 1 element per column) unless strange workarounds are made, such as bundling multiple elements into 1 React Component, which is not good for responsive design based on the browser width.

I am going to experiment with using React Konva, an independent framework where React Components can be rendered to the screen with more flexibility than Bootstrap.

Design:

-   Header
-   Body component containing a Konva "Stage"
-   Footer

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
