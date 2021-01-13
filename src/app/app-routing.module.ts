import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { BeerComponent } from './beer/beer.component';
import { WineComponent } from './wine/wine.component';
import { LiqourComponent } from './liqour/liqour.component';


const routes: Routes = [
  {
   path: '', redirectTo:'slider',pathMatch:'full'
  },
  {
    path:'slider',component: SliderComponent
  },
  {
    path:'beer',component: BeerComponent
  }
  ,
  {
    path:'wine',component: WineComponent
  }
  ,
  {
    path:'liqour',component: LiqourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
