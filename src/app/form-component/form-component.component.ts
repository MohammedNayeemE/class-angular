import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
submit(e:Event):void{
  e.preventDefault();
  console.log("Forms submitted");
  
}
}
