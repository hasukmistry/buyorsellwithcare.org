const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: {
                        // Skip mangling of properties
                        properties: false,
                    },
                    compress: {
                        // Disable removing unused variables
                        unused: false,
                    },
                    // Ensure function and variable names are not mangled
                    keep_fnames: true,
                    keep_classnames: true,
                },
            }),
        ],
    },
    resolve: {
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@config': path.resolve(__dirname, 'src/config/'),
        },
    },
};
