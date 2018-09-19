# react-neighborhood-map.github.io

My neighborhood map is the final test created for the Advanced Nanodegree Front-End Web Developer course, and it was created to implement my neighborhood and some great references around it. This is a React project and uses the purest concept of ES6, Recompose, React Google Maps and FourSquare API.

## How to use

Download the project directly or go to a specific folder and download it by git:

* `git init`

* `git clone https://github.com/pedroarvellos/react-neighborhood-map.git`

* install all project dependencies with `npm install`
* start the development server with `npm start`
* or run it in production mode by `npm run build`

Obs.: The Service Worker is created by create-react-app, but it just works in production mode.

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json
├── public
│   └── index.html
└── src
    ├── Map
    │   ├── Map.jsx - File responsible to iterate the map using recompose.
    │   ├── MarkerElement.jsx - This is a component is responsible to show the marker in the map.
    │
    ├── Search
    │   ├── Search.jsx - This component is responsible to display the input for search.
    │   ├── Search.css - This is the CSS for this component.
    │
    ├── Utils
    │   ├── FourSquareDAO.js - This js file has the persistence function to get data from FourSquare
    │
    │
    ├── App.jsx
    └── index.js

The project can be opened in any text editor, for example: _Sublime Text_, _Visual Studio_,  _Atom_, etc. To execute the project.

## Icons
The marker icons were made by [Daniel Bruce](https://www.flaticon.com/authors/daniel-bruce) from www.flaticon.com