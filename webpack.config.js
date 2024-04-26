// Generated using webpack-cli https://github.com/webpack/webpack-cli

const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = 'style-loader';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new Dotenv({
            path: './.env', // Path to .env file (this is the default)
            safe: true, // load '.env.example' to verify the '.env' variables are all set. Try not to use this in production.
        }),
        // Add your other plugins here
        ],
        mode: 'development',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            // Add your other rules for custom modules here
        ],
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "crypto": require.resolve("crypto-browserify"),
        }
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        // Add your production-specific configurations here
    } else {
        config.mode = 'development';
        // Add your development-specific configurations here
    }
    return config;
};
