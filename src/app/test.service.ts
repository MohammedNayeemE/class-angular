import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  helloworld() : void {
    console.log('Hello World');
    
  }
}
