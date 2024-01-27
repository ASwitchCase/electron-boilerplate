import { IpcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld("api", {
    message:"Hello from preload"
})