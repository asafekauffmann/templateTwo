import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxTableComponent } from './ngx-table/ngx-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationService } from './pagination.service';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
   declarations: [
      AppComponent,
      TableComponent,
      NgxTableComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      PaginationModule.forRoot(),
      HttpClientModule,
      NgxPaginationModule
   ],
   providers: [PaginationService],
   bootstrap: [AppComponent]
})
export class AppModule { }
