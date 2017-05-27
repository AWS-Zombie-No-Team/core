const getUser = require('../lib/get-user')

module.exports = (data) => {
  console.log(data)
  return getUser(data.authorizer.principalId)
    .then(user => {
      return {
        profession: user.profession,
        contacts: user.contacts,
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      }
    })
    .catch(err => {
      console.log(err)
      throw new Error('There is no such user')
    })
}
