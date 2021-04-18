import {app, BrowserWindow, protocol} from 'electron';
import path from 'path';
import createProtocol from 'umi-plugin-electron-builder/lib/createProtocol';

const isDevelopment = process.env.NODE_ENV === 'development';
let mainWindow: BrowserWindow;

protocol.registerSchemesAsPrivileged([
    {scheme: 'app', privileges: {secure: true, standard: true}}
]);

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: `My app -- ${process.env.NODE_ENV}`,
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    if (isDevelopment) {
        mainWindow.webContents.openDevTools();

        mainWindow.loadURL('http://localhost:8000');
    } else {
        createProtocol('app');
        mainWindow.loadURL('app://./index.html');
    }
}

app.on('ready', async () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }

    process.exit(0);
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});