import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RenderStylesComponent } from './render-styles.component';

@NgModule({
    imports: [CommonModule],
    declarations: [RenderStylesComponent],
    exports: [RenderStylesComponent]
})

export class RenderStylesModule { }