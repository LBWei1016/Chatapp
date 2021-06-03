const {ipcRenderer} = require('electron');
var io = require('socket.io')();

window.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById("usr-data");
    document.getElementById("usr-name").focus();

    button.addEventListener('submit', (event) => {
        event.preventDefault();

        const _userName = document.getElementById("usr-name").value
        const _room = document.getElementById("room").value
        ipcRenderer.send('enter', {_userName: _userName, _room: _room})

        location.href = `http://localhost:8000/page?userName=${_userName}&roomName=${_room}`;
    });
});