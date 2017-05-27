const uuid = require('uuid');
const moment = require('moment');

const getUser = require('../lib/get-user');
const updateUser = require('../lib/update-user');
const hash = require('../lib/utils/sha512');


module.exports  = (event, context, callback) => {
  getUser(event.id)
    .then(user => {
      if (hash(event.password) === user.password) {
        user.token = uuid.v4();
        user.tokenTimestamp = moment().toISOString();
        user.status = 'online';
        return updateUser(user).then(update => user);
      }

      callback(new Error('Stupid zombie hazker!!!'));
    })
    .then(user => {
      callback(null, {
        token: user.token,
        profession: user.profession,
        contacts: user.contacts,
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      });
    })
    .catch(err => {
      console.log(err);
      callback(new Error('Ooops zombie login crash!'));
    });
}
