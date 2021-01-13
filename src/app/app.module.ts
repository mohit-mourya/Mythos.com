import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, OnDestroy } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { MythosNavComponent } from './mythos-nav/mythos-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { BeerComponent } from './beer/beer.component';
import { WineComponent } from './wine/wine.component';
import { LiqourComponent } from './liqour/liqour.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { LoginSignupComponent } from "./login-signup/login-signup.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatRadioModule } from "@angular/material/radio";
import { SlideBarDataComponent } from './slide-bar-data/slide-bar-data.component';


@NgModule({
  declarations: [
    AppComponent,
    MythosNavComponent,
    SliderComponent,
    FooterComponent,
    BeerComponent,
    WineComponent,
    LiqourComponent,
    PageNotFoundComponent,
    LoginSignupComponent,
    SlideBarDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    LayoutModule,
    MatListModule,
    MatPaginatorModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {


 }
