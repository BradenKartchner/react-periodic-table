# React + @react-konva

https://konvajs.org/docs/react/index.html

Most responsive layout systems (flexbox, Bootstrap, etc.) use a maximum of 12 columns that wrap for responsive web design. Unfortunately, 12 columns is not enough to display the Periodic table (at 1 element per column) unless strange workarounds are made, such as bundling multiple elements into 1 React Component, which is not good for responsive design based on the browser width.

I am going to experiment with using React Konva, an independent framework where React Components can be rendered to the screen with more flexibility than Bootstrap.

Dependencies to install:
react-konva
react-konva-utils

Suggestions from peers to improve the app:

-   glow hover effect on mouseover even when already clicked on an element (transparent ghost effect on mouseover, solid effect on the currently selected element)
-   new element chosen highlights onMouseDown, not onClick (so it highlights without releasing the mouse button)
-   style the wikipedia info so it matches the element of the table (a little vague, maybe ask follow-up questions)
-   make transitions smoother when moving from one family to another to reduce flashing
-   make the colors more distinct from each other (especially Noble gases)
-   make it more clear where to click to pull up the wiki information (click here ->)

Additional features to add:

-   footer bar with copyright, my name and email
-   header bar with title?
-   options for degrees C and K in side bar info
-   make click on already clicked element change focus back to transitory

Formatting to fix:

-   Force background color to be the same for dark and light mode

Issue that had to solve for Vercel deployment:
Had to change root dir to "react-periodic-table" (within the first root dir of "react-periodic-table")
Having nested folders with the same name either confused the build or the build scripts
were just nested in the inner folder of that name
Figured it out from this comment on issue on GitHub:
"I had the same issue. My folder structure was Project Name > Project Name > Project Files. Cleared it to just Project Name > Project Files. Happened when I imported from github I guess and never really fixed it. Fixed it after I got the error and it worked. Not sure if that was the problem, could have been a file not in the right place but it worked after. That was my experience anyways. I went to Vercel and it was already live."

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
