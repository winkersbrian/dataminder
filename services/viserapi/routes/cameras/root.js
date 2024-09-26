'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { cameras: [
        {
            camera_2: {
                displayName: "Park Entrance",
                thumbName: 'ParkEntrance'
            },
            camera_1: {
                displayName: "Dumpsite Men's room",
                thumbName: 'DumpsiteMensRoom'
            },
        }
    ] }
  })
}
