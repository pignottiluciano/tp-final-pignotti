import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp-final-pignotti';
  idMenu?: string;

  ngOnInit() {
    this.idMenu = 'inicio';
  }
}
