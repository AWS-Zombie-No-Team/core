const f = require('./index');

f({
  authorizer: {
    principalId: 'user'
  },
  password: 'password',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
