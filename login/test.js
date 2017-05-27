const f = require('./index');

f({
    id: 'user',
    password: 'password',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
