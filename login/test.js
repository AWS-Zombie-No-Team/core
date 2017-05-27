const f = require('./index');

f({
  id: 'user',
  password: 'password',
}, {}, (err, res) => {
  console.log(err, res);
});
