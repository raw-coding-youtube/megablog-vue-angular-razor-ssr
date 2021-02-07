import { enableProdMode, APP_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { TransferState } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export function initTransferState() {

}

const provider = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: TransferState, useFactory: initTransferState, deps: [DOCUMENT, APP_ID] }
]

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic(provider)
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
