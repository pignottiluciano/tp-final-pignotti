import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [MaterialModule, ReactiveFormsModule, HttpClientModule, MatDialogModule],
  exports: [MaterialModule, ReactiveFormsModule, HttpClientModule, MatDialogModule],
})
export class SharedModule {}
