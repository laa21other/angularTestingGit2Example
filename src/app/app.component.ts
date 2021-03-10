import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';
  YES_SESSION = "Hello $username";
  NO_SESSION = "Please, log in";
  username = "";
  testUsername = "Anon"
  textLogged = this.NO_SESSION;



  showAlert(){

    alert("this is an alert");
  }

  login(){

    this.textLogged = this.YES_SESSION.replace("$username",this.testUsername);


  }

  closeSession(){

    this.textLogged = this.NO_SESSION;
    
  }


}

