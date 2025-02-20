import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [ // Aslında buraya eklediğimiz değerler eski versiyonlarda module klasörüne eklediğimiz module lerdir onları buraya ekleriz.
    // Ve ekleme yaparken de artık başına provide koyup ekleriz.
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

  ]
};
