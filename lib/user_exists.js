const aws = require('./aws');
const getuser = require('./get-user');

const userExists = (id) => {
    return getuser(id).then( user => {
        if (user == undefined) {
            return false;
        } else return true;
    })
}

module.exports = userExists;
