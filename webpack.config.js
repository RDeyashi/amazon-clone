const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "fresh": "http://localhost:4201/remoteEntryFresh.js",
    "mobiles": "http://localhost:4202/remoteEntryMobile.js"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
