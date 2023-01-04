import { IpcRenderer } from 'electron';

declare global {
  interface Window {
    ipcRenderer: IpcRenderer;
  }

  interface IProduct {
    id: number;
    name: string;
    price: number;
  }
}