import { HelloComponent } from './hello/hello.component';
import { UserCardComponent } from './user-card/user-card.component';
import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TestService } from './test.service';
import { EmpinfoComponent } from './empinfo/empinfo.component';
import { FormsModule } from '@angular/forms';
import { FormComponentComponent } from './form-component/form-component.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , HelloComponent ,RouterLink , RouterLinkActive , EmpinfoComponent, UserCardComponent,NgIf , NgFor , FormComponentComponent ,HttpClientModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private testService : TestService){
   
  }
  ngOnInit(): void {
      this.testService.helloworld()
  }
  title = 'routing-app';
}
