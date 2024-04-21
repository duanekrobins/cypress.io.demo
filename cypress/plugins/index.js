/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  console.log(config) // see everything in here!
  config.defaultCommandTimeout = 10000

  config.env.USERLOGIN = 'user'
  config.env.USERPASSWORD = 'user'
  config.env.ADMINLOGIN = 'admin'
  config.env.ADMINPASSWORD = 'admin'
  
  const items = {}
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium') {
      // launch chrome using incognito
      launchOptions.args.push('--incognito')
      console.log(launchOptions.args)
    }
    return launchOptions
  })
  on('task', {
    setItem ({ name, value }) {
      console.log('setting %s', name)
      if (typeof value === 'undefined') {
        // since we cannot return undefined from the cy.task
        // let's not allow storing undefined
        throw new Error(`Cannot store undefined value for item "${name}"`)
      }

      items[name] = value

      return null
    },

    getItem (name) {
      if (name in items) {
        console.log('returning item %s', name)

        return items[name]
      }

      const msg = `Missing item "${name}"`

      console.error(msg)
      throw new Error(msg)
    },
  })
  return config
};
