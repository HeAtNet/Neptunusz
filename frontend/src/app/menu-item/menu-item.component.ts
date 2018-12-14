import { Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input('href') href: string;
  @Input('value') txt: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate([this.href])
  }

}
