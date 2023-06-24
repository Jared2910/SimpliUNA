import { NgModule } from '@angular/core';

// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
import { ButtonModule } from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';



@NgModule({
  exports:[
    ButtonModule,
    DividerModule,
    MessagesModule,
    TableModule,
    TabViewModule
  ]
})
export class PrimeNgModule { }
