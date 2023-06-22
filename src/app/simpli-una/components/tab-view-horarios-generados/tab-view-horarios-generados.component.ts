import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-view-horarios-generados',
  templateUrl: './tab-view-horarios-generados.component.html'
})
export class TabViewHorariosGeneradosComponent implements OnInit {


  activeIndex1: number = 0;

  activeIndex2: number = 0;

  scrollableTabs: any[] = Array.from({ length: 10 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));


  constructor() { }

  ngOnInit(): void {
  }

}
