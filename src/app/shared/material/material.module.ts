import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatOptionModule} from '@angular/material/core';

const MaterialComponents = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSortModule,
  MatSlideToggleModule,
  MatOptionModule,
]

@NgModule({
  imports: [MaterialComponents],
  exports: [
    MaterialComponents
  ],
  providers: [
    MatSnackBar,
  ],
})
export class MaterialModule { }
