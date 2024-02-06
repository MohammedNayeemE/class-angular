import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1 : string[] = ["Adam miller" , "E2334" , "at@abc.net"]
  info2 : string[] = ["Adam michul" , "E2150" , "bs@abc.net"]
  info3 : string[] = ["Adam mikhel" , "E3150" , "cd@abc.net"]
  getinfo1():string []{
    return this.info1
  }
getinfo2():string []{
    return this.info2
  }
  getinfo3():string []{
    return this.info3
  }
  constructor() { }
}
