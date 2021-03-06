# webpack client

```
git clone git@github.com:zoe-1/reactstartup.git

cd reactstartup

npm install
```

## webpack, babel, and react setup
  - reactjs
  - webpack

npm install --save-dev babel-loader babel-core babel-preset-react babel-preset-es2015 webpack webpack-dev-server html-webpack-plugin clean-webpack-plugin pug pug-loader <br/><br/>
npm install --save react react-dom react-router react-router-dom prop-types<br/>


### configure .babelrc
`echo '{ "presets": ["react", "es2015"], "plugins": ["transform-react-jsx"] }' > .babelrc`


### configure webpack to tranform react with babel
```
module: {
    rules: [
           {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: "babel-loader"
           },
           {
             test: /\.jsx$/,
             exclude: /node_modules/,
             loader: "babel-loader"
           }
   ]
}
```

### start project

* npm start
  - tranforms all react-jsx to js
  - starts webpack server
  - HMR hot loading modules configured
* npm run watch
  - watches for file changes and restarts


## testing setup

npm i --save-dev enzyme react-test-renderer react-dom sinon lab code lab-babel


### linting
npm install eslint-config-hapi eslint-plugin-react --save-dev

.eslintrc.json
```
{
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "eslint-config-hapi",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ]
}

```

Requires sourceType: "module" which treats everything as a module versus script.
Eliminates need for 'use strict';. However, now found a memory leak when running tests. 
__core-js_shared__ is the culprit.


### styles and fonts
npm install -save-dev stylus stylus-loader style-loader file-loader


CREDITS

**jura font**<br/> 
  SIL Open Font License v1.10 <br/>
  https://www.fontsquirrel.com/fonts/jura1 <br/>
  [licenses/JURA-LICENSE](licenses/JURA-LICENSE) <br/>

**volkhov font** <br/>
  SIL Open Font License v1.10 <br/>
  https://www.fontsquirrel.com/fonts/volkhov <br/>
  [licenses/VOLKHOV-LICENSE](licenses/VOLKHOV-LICENSE) <br/>
