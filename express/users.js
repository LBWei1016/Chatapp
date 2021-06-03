let users = [];

//設定加入的使用者資訊
function joinUsers(_socketId, _userName, _roomName) {
    const user = {
        socketId: _socketId,
        userName : _userName,
        roomName: _roomName
    };
    users.push(user);
    return user;
}

function removeUsers(id) {
    const getId = user => user.socketId === id; //users or user?
    const index = users.findIndex(getId);
    if(index !== -1) {
        return users.splice(index, 1); //return deleted user as an array
    }
}

//輸出至其他JS(利用"require()"獲取)
module.exports = {joinUsers, removeUsers};
