const aws = require('./../lib/aws')
const getMsg = require('./../lib/get_msg')

const getAllMsg = (data) => {
  return getuser(data.authorizer.principalId).then(user => {
    var messages = []
    for (var i = 0, len = ; i < len; i++) {
      var msg = getMsg(data.compoundkey)
      messages.push(msg)
    }
    return Promise.all(friends)
  })

}

module.exports = GetAllMsg
