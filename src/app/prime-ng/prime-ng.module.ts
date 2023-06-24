import { NgModule } from '@angular/core';

// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';



@NgModule({
  exports:[
    AutoCompleteModule,
    ButtonModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    MessagesModule,
    TableModule,
    TabViewModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
