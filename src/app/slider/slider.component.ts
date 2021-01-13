import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit {


  ngOnInit(): void {
  }

  images = ['../../assets/ash-edmonds-OzMHgwxTolo-unsplash.jpg',
  '../../assets/bruno-oliveira-_zqm6tWODWA-unsplash.jpg',
  '../../assets/nitin-mendekar-WOIe_leUDLc-unsplash.jpg',
  '../../assets/nicholas-safran-uEZMQ4ipjzY-unsplash.jpg',
  '../../assets/jacek-dylag-JwWKV2gCPkE-unsplash.jpg',
  '../../assets/skrewball-whiskey-kVEGUjQYGgM-unsplash.jpg',
  '../../assets/michael-fousert-K85v7YM_7vk-unsplash.jpg',
  '../../assets/jack-ward-yU9TNvk_jI8-unsplash.jpg',
  '../../assets/wine/wine1.jpg',
  '../../assets/wine/wine14.jpg',
  '../../assets/wine/wine4.jpg',
  '../../assets/wine/wine6.jpg',
  '../../assets/wine/wine8.jpg',
  '../../assets/wine/wine5.jpg',
  '../../assets/wine/wine9.jpg',
  '../../assets/wine/wine11.jpg',
  '../../assets/wine/wine14.jpg',
  '../../assets/wine/wine12.jpg',
  '../../assets/wine/wine16.jpg',
  '../../assets/wine/wine13.jpg',
  '../../assets/wishky/wiskey.jpg',
  '../../assets/wishky/wiskey1.jpg',
  '../../assets/wishky/wiskey2.jpg',
  '../../assets/wishky/wiskey3.jpg',
  '../../assets/wishky/wiskey4.jpg',
  '../../assets/wishky/wiskey5.jpg',
  '../../assets/wishky/wiskey6.jpg',
  '../../assets/wishky/wiskey7.jpg',
  '../../assets/wishky/wiskey8.jpg',
  '../../assets/wishky/wiskey9.jpg',
  '../../assets/wishky/wiskey10.jpg',
  '../../assets/wishky/wiskey11.jpg'
 ]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000000000000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
  }


  
}
