'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/:cameraId', async function (request, reply) {
    return { 
      cameraId: request.params.cameraId,
      videoB64: '' 
    }
  })
}