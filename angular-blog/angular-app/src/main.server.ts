import 'zone.js/dist/zone-node'
import 'reflect-metadata'
import { renderModule } from "@angular/platform-server";
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.server.module';
import { createServerRenderer } from 'aspnet-prerendering'
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { APP_BASE_HREF } from '@angular/common';

enableProdMode();

export default createServerRenderer(params => {

  const options = {
    document: params.data.originalHtml,
    url: params.url,
    extraProviders: [
      provideModuleMap({}),
      { provide: APP_BASE_HREF, useValue: params.baseUrl },
      { provide: "BASE_URL", useValue: params.origin + params.baseUrl }
    ]
  }

  const renderPromise = renderModule(AppServerModule, options);

  return renderPromise.then(html => {
    return { html };
  })
})