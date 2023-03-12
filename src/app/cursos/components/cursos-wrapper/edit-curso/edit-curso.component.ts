import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.scss'],
})
export class EditCursoComponent implements OnInit {
  curso?: Curso;
  ngOnInit() {
    console.log('entre aca');
  }
}
