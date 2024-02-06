import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  standalone:true,
})
export class UserCardComponent {
  @Input() userName: string ='';
  @Input() email: string = '';
  @Input() mobileNumber: string = '';
  @Input() additionalInfo: string = '';
  save():void{
    console.log('button is clicked');
    
  }
}
