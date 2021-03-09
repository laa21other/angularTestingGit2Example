import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';
  YES_LOGGED = "Hello $username";
  NO_LOGGED = "Please, log in"
  textLogged = "";
  defaultUSer = "AnonUser";

  showAlert(){

    alert("this is an alert");
    
  }

  login(){

    this.textLogged = this.YES_LOGGED.replace("%username",this.defaultUSer);
  }

  closeSession(){

    this.textLogged = this.NO_LOGGED;
  }
}

