import { CommonModule, NgIf } from '@angular/common';
import { Component , Input, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule,NgIf , FormsModule],
 
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  Name = ""
  // username : string = 'default';
  // maialid : string = 'abc@123';
  // mobileNumber : number = 12345678;
  // description : string = 'hi i am a student';
  
   isLoggedIn : boolean = true;
   
   onSubmit(f:any) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

  }
 
}


