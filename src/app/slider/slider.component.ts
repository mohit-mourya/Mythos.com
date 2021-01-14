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

  images = ['https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/ash-edmonds-OzMHgwxTolo-unsplash.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/bruno-oliveira-_zqm6tWODWA-unsplash.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/nitin-mendekar-WOIe_leUDLc-unsplash.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/nicholas-safran-uEZMQ4ipjzY-unsplash.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/jacek-dylag-JwWKV2gCPkE-unsplash.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/skrewball-whiskey-kVEGUjQYGgM-unsplash.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/michael-fousert-K85v7YM_7vk-unsplash.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/jack-ward-yU9TNvk_jI8-unsplash.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine1.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine14.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine4.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine6.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine8.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine5.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine9.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine11.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine14.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine12.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine16.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wine/wine13.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey1.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey2.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey3.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey4.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey5.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey6.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey7.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey8.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey9.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey10.jpg?raw=true',
  'https://github.com/mohit-mourya/Mythos.com/blob/master/src/assets/wishky/wiskey11.jpg?raw=true'
 ]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000000000000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
  }



}
