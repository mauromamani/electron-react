import "reflect-metadata";
import { app, BrowserWindow, dialog } from 'electron';
import * as path from 'path';
import { join } from 'path';
import { AppDataSource } from "../renderer/src/database/data-source";
import './ipcMain';

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.cjs'),
      contextIsolation: true,
    },
  });

  try {
    await AppDataSource.initialize();
    console.log("Database initialized!");
    dialog.showMessageBox(win, {
      message: "FUNCIONA",
    })
  } catch (error) {
    console.log("Database crashed!");
    console.log(error);
  }

  if (app.isPackaged) {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  } else {
    win.loadURL('http://localhost:3000');
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});