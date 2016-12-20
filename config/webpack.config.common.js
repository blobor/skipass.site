'use strict'

const autoprefixer = require('autoprefixer')
const { browsers } = require('./app.config')

module.exports = {
  entry: {
    app: './src/client.js',
    vendor: [
      'babel-polyfill',
      'classnames',
      'immutable',
      'inputmask-core',
      'isomorphic-fetch',
      'lodash.flow',
      'lodash.get',
      'lodash.has',
      'lodash.isempty',
      'lodash.isnil',
      'lodash.isobject',
      'lodash.omit',
      'lodash.times',
      'material-design-lite',
      'material-ui',
      'moment',
      'moment-timezone',
      'pouchdb-adapter-idb',
      'pouchdb-adapter-localstorage',
      'pouchdb-adapter-memory',
      'pouchdb-adapter-websql',
      'pouchdb-core',
      'pouchdb-find',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-tap-event-plugin',
      'redux',
      'redux-immutable',
      'redux-logger',
      'redux-thunk'
    ]
  },
  stats: {
    colors: true,
    timings: true
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers
      })
    ]
  }
}
