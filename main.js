const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
//require('./express/app.js'); 
//app.js(server) ¥t¥~¶}

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
    // frame: false,
    // transparent: true,
    // autoHideMenuBar: true
    });
    mainWindow.loadFile('welcome.html');
    //mainWindow.webContents.openDevTools();

    //return mainWindow;
};

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if(process.platform != 'darwin')
        app.quit();
});