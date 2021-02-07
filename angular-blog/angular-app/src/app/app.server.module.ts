import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { RenderStylesComponent } from './render-styles/render-styles.component';
import { RenderStylesModule } from './render-styles/render-styles.component.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    RenderStylesModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent, RenderStylesComponent]
})
export class AppServerModule {}
