import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment.development";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"lab-5-54a28","appId":"1:602710843429:web:3acbbb6c38d364d9475fcc","storageBucket":"lab-5-54a28.appspot.com","apiKey":"AIzaSyDwNwXmXiIh7ko4A3EnWlANaAR8YKDn68c","authDomain":"lab-5-54a28.firebaseapp.com","messagingSenderId":"602710843429","measurementId":"G-F8T61GNZM1"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage())
  ]
};
