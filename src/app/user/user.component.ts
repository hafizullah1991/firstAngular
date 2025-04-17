import { Component, computed, signal, Input, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() id!: number;
  // selectedUser = signal(DUMMY_USERS)
  // selectedUser = signal(DUMMY_USERS[randomIndex]); 
   //initalize here 
  // imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar);
  // what is computed?
  // Computed is function that creates reactive value that automaticly updates when it's depencies changes
  // it mean when we add a photo  or anything changes it recalculate, check signal is changed so it will uppdate the UI.
   
  onSelectUser(){
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set( DUMMY_USERS[randomIndex])  //updating here using set()
   
  }
 
}
