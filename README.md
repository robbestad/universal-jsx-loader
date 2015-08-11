# SVENJSX loader for Webpack

Add the loader to your Webpack config, like so:

```
module: {
    preLoaders: [
      { test: /\.js$/, loaders: ['universal-jsx-loader'], exclude: /node_modules/ }
    ],
    loaders: [
      [etc...]
    ]
  }
```
This will convert the JSX syntax before any other processing is done.
