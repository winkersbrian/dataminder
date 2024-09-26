'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')

// Pass --options via CLI arguments in command to enable these options.
const options = {}

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  const authenticate = {realm: 'SpaceportRVPark'}
  fastify.register(require('@fastify/basic-auth'), { validate, authenticate })
  async function validate (username, password, req, reply) {
    if (username !== 'management' || password !== 'sp4c3p0rt2!2!Nahd00') {
      return new Error('ACCESS DENIED - UNAUTHORIZED ATTEMPTS ARE A CRIME')
    }
  }

  fastify.after(() => {
    fastify.route({
      method: 'GET',
      url: '/admin',
      onRequest: fastify.basicAuth,
      handler: async (req, reply) => {
        return { error: 'ACCESS DENIED - UNAUTHORIZED ATTEMPTS ARE A CRIME - YOUR ACTIVITY HAS BEEN LOGGED' }
      }
    })
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

  // fastify.listen({ port: 3000, host: '192.168.205.4'})
}

module.exports.options = options
