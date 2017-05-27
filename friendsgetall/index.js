const aws = require('./../lib/aws');
const getuser = require('./../lib/get-user.js');

const FriendsGetAll = (data) => {
    return getuser(data.authorizer.principalId).then(user=>{
        var friends = [];
        for (var i = 0, len = user.contacts.length; i < len; i++) {
            var friend  = getuser(user.contacts[i]);
            friends.push(friend);
        }
        return Promise.all(friends);
    }).then( allfriends => {
        return allfriends
            .filter(friend => friend !== undefined)
            .map((friend, key) => {
            return {
                id: friend.id,
                name: friend.name,
                status: friend.status,
                profession: friend.profession,
                avatar: friend.avatar
            };
        });
    })

}

module.exports = FriendsGetAll;