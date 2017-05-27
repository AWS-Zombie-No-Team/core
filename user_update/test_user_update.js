const f = require('./index')

f({
  authorizer: {
    principalId: 'user'
  },
  password: 'password',
  status: 'online',
  profession: 'Medic2',
  name: 'user'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})