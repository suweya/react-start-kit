# React Redux Webpack Start Kit 

## Directory Structure

- Root
	- src (source) 
		- actions
		- components
		- pages
		- containers
		- constants
		- reducers
		- store
		- index.js
	- style
	- webpack.config.js
	- server.js
	- index.html


## package.json

`npm install --save react react-dom redux react-redux`


## webpack.config.js

`npm install -g webpack`

`npm install --save-dev webpack webpack-dev-server`

### server.js (webpack-dev-server)


## ES6 transform

- babel-core
`npm install --save-dev babel-core`


## ES6 transform webpack loader

`npm install --save-dev babel-loader babel-preset-es2015 babel-preset-react`


## ES6 ployfill (浏览器兼容)

`npm i --save babel-polyfill`
- 在src的index.js添加: `import 'babel-polyfill'`


## CSS webpack loader

`npm install --save-dev css-loader style-loader`


## DEVTools

`npm install --save-dev redux-devtools redux-devtools-dock-monitor redux-devtools-log-monitor`

- create `devTools.js`
- add in root.js


## react hot loader

`npm install --save-dev react-hot-loader`


## 路由

### redux-router

`npm i --save redux-router`

### react-router

`npm i --save react-router`


## Entry && Root Component

- index.js
- root.dev.js root.prod.js


## stroe 配置

- configureStore.js 
- configureStore.dev.js
- configureStore.prod.js