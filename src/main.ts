import * as $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

(function () {
  'use strict';

  $(document).ready(function () {
    // $('.hero__slick').slick({
    //   dots: false,
    //   infinite: true,
    //   autoplay: true,
    //   fade: true,
    //   arrows: false
    // });

    $('.perfumes__slick').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      // fade: true,
      arrows: true,
      slidesToShow: 3,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }]
    });

    $('.feedback__show-more-container').click(() => {
      $('.feedback__show-more-container').remove();
      $('.feedback__list_folded').removeClass('feedback__list_folded');
      $('.feedback__image').addClass('no-blur');
    });
  });
})();
