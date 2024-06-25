const { app, BrowserWindow, nativeImage } = require("electron");
const path = require('path');

require("electron-reload")(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

function createWindow() {
  const icon = nativeImage.createFromPath(path.join(__dirname, 'assets/lista.png'));

  if (app.dock) {
    app.dock.setIcon(icon);
  }

  const win = new BrowserWindow({
    icon,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    },    
    autoHideMenuBar: true
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});