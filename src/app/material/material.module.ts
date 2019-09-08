import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

const MaterialComponents = [MatButtonModule, MatMenuModule
  , MatToolbarModule, MatIconModule, MatSelectModule, MatButtonToggleModule, MatInputModule,
  MatCardModule, MatDialogModule, MatChipsModule, MatPaginatorModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
