import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BottlePage } from './bottle';

@NgModule({
    declarations: [
      BottlePage,
    ],
    imports: [
        IonicPageModule.forChild(BottlePage),
    ],
})
export class BottlePageModule { }
