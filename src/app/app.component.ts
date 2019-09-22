import { Component } from '@angular/core';
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBMan9uYEdROXVOjTmtE75z72fVz8rk-wQ",
  authDomain: "angular-maps-514aa.firebaseapp.com",
  databaseURL: "https://angular-maps-514aa.firebaseio.com",
  projectId: "angular-maps-514aa",
  storageBucket: "",
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-maps';

  constructor ()
  {
    firebase.initializeApp(config);
  }
}
