import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenuListComponent } from './menu-list/menu-list.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, MenuListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
