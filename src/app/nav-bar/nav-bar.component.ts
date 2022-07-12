import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  itemsNavBar: Array<{
    value: string;
    num: number;
    rute: string;
    icon: string;
  }> = [
    { value: 'Home', num: 0, rute: '/home', icon: '../../assets/01 Home.svg' },
    {
      value: 'Acounts',
      num: 1,
      rute: '/counts',
      icon: '../../assets/02 Cuentas.svg',
    },
    {
      value: 'Register',
      num: 2,
      rute: '/register',
      icon: '../../assets/03 Registros.svg',
    },
    {
      value: 'Stats',
      num: 3,
      rute: '/home',
      icon: '../../assets/04 Stats.svg',
    },
  ];

  visible: Array<boolean> = [false, true, true, true];

  constructor() {}

  ngOnInit(): void {}

  visibilityButton(num: number): void {
    this.visible.fill(true);
    this.visible[num] = false;
  }
}
