const path = require('path');
const builder = require('electron-builder');

builder.build({

    projectDir: path.resolve(__dirname),  // �M�׸��| 

    win: ['nsis', 'portable'],  // nsis . portable
    config: {
        "appId": "com.andrewdeveloper.electron.cat",
        "productName": "Chat", // ���ε{���W�� ( ��ܦb���ε{���P�\�� )
        "directories": {
            "output": "build/win"
        },
        "win": {
            "icon": path.resolve(__dirname, './img/cat.png'),
        }
    },
})
    .then(
        data => console.log(data),
        err => console.error(err)
    );