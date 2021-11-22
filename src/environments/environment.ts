// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  server: 'https://injectronic-sistemas.uc.r.appspot.com/api',
  sessionName: 'cjfixit-session',
  multiSession: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDeTmq-qLzFSgevplBbAZCeKDHdx2omDoU',
    authDomain: 'injectronic-sistemas.firebaseapp.com',
    projectId: 'injectronic-sistemas',
    storageBucket: 'injectronic-sistemas.appspot.com',
    messagingSenderId: '1040328363546',
    appId: '1:1040328363546:web:85b21f855b8560010ccba3',
    measurementId: 'G-E3D9TH7QC8'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
