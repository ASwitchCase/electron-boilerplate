import {app,ipcMain, BrowserWindow} from "electron"

let mainWindow : BrowserWindow

app.on("ready", ()=>{
    mainWindow = new BrowserWindow({
        width:900, height: 600,
        webPreferences: {
            preload: __dirname + "/preload.js"
        }
    })

    mainWindow.loadFile("./index.html")
    mainWindow.on("ready-to-show", () => mainWindow.show())
});