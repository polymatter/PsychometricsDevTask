import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { AppComponent } from './app.component';
import { AddNewUserRowComponent } from './add-new-user-row/add-new-user-row.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddNewUserRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
