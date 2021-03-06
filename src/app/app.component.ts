import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uxTrendzExOne';

  // for Users
  users =[];
  pushUsers(data){
    this.users.push(data);
  }
  onRemoveUsers(item){
    this.users.splice(item, 1)
  }

  // for Admins
  admins =[];
  pushAdmins(data){
    this.admins.push(data);
  }
  onRemoveAdmins(item){
    this.admins.splice(item, 1)
  }
}
