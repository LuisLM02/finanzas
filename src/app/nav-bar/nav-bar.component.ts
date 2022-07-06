import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  visible:Array<boolean> = [false, true, true, true];

  constructor() { }

  ngOnInit(): void {
  }

  visibilityButton(num:number):void {
    this.visible.fill(true);
    this.visible[num] = false;
  }
}
