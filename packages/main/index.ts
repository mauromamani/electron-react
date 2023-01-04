import "reflect-metadata";
import { app, BrowserWindow, dialog } from 'electron';
import * as path from 'path';
import { join } from 'path';
import { AppDataSource } from "./database/data-source";
import './handlers/product.handler';

async function createWindow() {
  // Database connection
  try {
    await AppDataSource.initialize();
  } catch (error) {
    dialog.showErrorBox("Error en la base de datos", "Contacte con el administrador del sistema.")
  }

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.cjs'),
      contextIsolation: true,
    },
  });

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