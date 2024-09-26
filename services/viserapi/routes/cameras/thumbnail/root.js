'use strict'

const fs = require('fs');

module.exports = async function (fastify, opts) {
  fastify.get('/:thumbName', async function (request, reply) {

    const thumbName = request.params.thumbName;

    try {
        const camFileRoot = '/home/brian/viseron-data/viseron-data/recordings';
        const fileName = `${camFileRoot}/thumbnails/${thumbName}/latest_thumbnail.jpg`;
        console.log(fileName)
        const buffer = fs.readFileSync(fileName);

        console.log(`base64String`, base64String.slice(0, 100));
        return { 
            thumbName: request.params.thumbName,
            data: `data:image/jpg;base64,${base64String}` 
        }
    } catch (error) {
        throw new Error(error)
    }
  })
}