import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  setItem(name: string, value: any) {
    try {
      localStorage.setItem(name, value.toString());
    } catch (reason) {
      throw reason;
    }
  }
  getItem(name: string): string {
    try {
      return localStorage.getItem(name);
    } catch (reason) {
      throw reason;
    }
  }
  removeItem(name: string) {
    try {
      localStorage.removeItem(name);
    } catch (reason) {
      throw reason;
    }
  }
}
