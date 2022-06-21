const { v4: uuid } = require('uuid')

const userId = uuid()

const userRequestContext = {
  authorizer: {
    claims: {
      'cognito:username': userId
    }
  }
}

const commonEventProps = {
  httpMethod: 'GET',
  headers: {}
}

module.exports = {
  userId,
  userRequestContext,
  commonEventProps
}