import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BeachVolleyComponent } from './beach-volley/beach-volley.component';
import { HomepageComponent } from './homepage/homepage.component';

const ANGULAR_MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatTableModule,
];

@NgModule({
  declarations: [AppComponent, BeachVolleyComponent, HomepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...ANGULAR_MATERIAL_COMPONENTS,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
