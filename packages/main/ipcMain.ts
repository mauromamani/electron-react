import { ipcMain } from "electron";

ipcMain.handle("testing-ipc", (_ev, arg1) => {
  return "Respuesta";
});
