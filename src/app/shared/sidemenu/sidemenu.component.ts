import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li {
      cursor: pointer
    }
  `]
})
export class SidemenuComponent  {

  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './template/basics'
    },
    {
      text: 'Dinámicos',
      route: './template/dinamics'
    },
    {
      text: 'Switches',
      route: './template/switches'
    }
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basics'
    },
    {
      text: 'Dinámicos',
      route: './reactive/dinamics'
    },
    {
      text: 'Switches',
      route: './reactive/switches'
    }
  ];


  

}
