import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
 constructor(private http:HttpClient){

 }
 ngOnInit():void{
  this.http.get("https://jsonplaceholder.typicode.com/posts")
  .subscribe((data)=>{
    console.log(data);
    
  })
 }
}
