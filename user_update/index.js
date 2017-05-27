const getUser = require('../lib/get-user')
const updateUser = require('../lib/update-user')

module.exports = (data) => {
  return getUser(data.authorizer.principalId)
    .then(user => {
      //user = Object.assign({}, user, data)
      if (data.password) {
        user.password = data.password
      }
      if (data.avatar) {
        user.avatar = data.avatar
      }
      if (data.status) {
        user.status = data.status
      }
      if (data.profession) {
        user.profession = data.profession
      }
      if (data.name) {
        user.name = data.name
      }

      return updateUser(user).then(() => {
        console.log(user);
        return user;
      })
    }).catch(err => {
      console.log(err)
      throw new Error('Cannot update user')
    })
}
