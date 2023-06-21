import { NgModule } from '@angular/core';

// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';



@NgModule({
  exports:[
    ButtonModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
