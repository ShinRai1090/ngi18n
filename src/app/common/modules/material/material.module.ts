import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
/* import {
         MatNativeDateModule
        } from '@angular/material'; */

/* import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'; */

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTreeModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    /* MatNativeDateModule, */
    MatSlideToggleModule,
    MatSortModule,
    MatCardModule,
    /* NgxMatSelectSearchModule,
    NgxMaterialTimepickerModule */
  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTreeModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    /* MatNativeDateModule, */
    MatSlideToggleModule,
    MatSortModule,
    MatCardModule,
    /* NgxMatSelectSearchModule,
    NgxMaterialTimepickerModule */
  ]
})
export class SharedMaterialModule { }
