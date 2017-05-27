const f = require('./index')

f({
  authorizer: {
    principalId: 'user'
  },
  password: 'new_password2',
  avatar: 'new_avatar2',
  contacts: ['id1', 'id2'],
  status: 'online',
  profession: 'Medic2',
  name: 'name1'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})