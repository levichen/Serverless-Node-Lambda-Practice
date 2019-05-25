const MTools = require('mtools')
const mtools = new MTools()

/**
 * @param {AWSLambda.APIGatewayEvent} event
 * @param {AWSLambda.Context} context
 * @param {AWSLambda.Callback} callback
 */
module.exports.hello = async (event, context, callback) => {
  mtools.exec()

  console.log(`Environment Variable: ${process.env.BACKEND_ENDPOINT}`)
  console.log(`Event Sources: ${JSON.stringify(event)}`)

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v1.0----! Your function executed successfully!`
    })
  }

  callback(null, response)
}
