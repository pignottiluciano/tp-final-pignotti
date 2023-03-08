import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input()
  id?: string;

  @Output()
  idChange = new EventEmitter<string>();

  constructor(private router: Router) {}

  changeWrapper(type: string) {
    this.id = type.toUpperCase();
    this.idChange.emit(this.id);
  }
}
