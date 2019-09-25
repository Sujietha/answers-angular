import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public input = {  a: 5, b: { c: { d: 10 } }} ;
  public string = ['one','two', 2,'one', 11,'two',11,2,];
  public result2;
  public result3 = []; //1st question example
  public result4a;
  public result4b;
  public result5 = [];
  public sample = "Hello!  how  are  you";
  public CharArray = ["To"," ","people here","@"];
  public input4b = this.CharArray.join("");
  
  constructor() {
  }
  ngOnInit() {
    this.answer();
  }
  getKeys = (input) =>{
    let arr = [];
    JSON.stringify(input,(key,value)=> {
      arr.push(key);
      return value;
    })
    return arr.slice(1);
  }

  reverse(inpt) {
    let result = []; //1st question example
    for (let i = inpt.length - 1; i >= 0; i--) {
      result.push(inpt.charAt(i));
    }
    return result.join("");
  }

  getCount(inp) {
  return inp.split('').reduce( (prev, curr) => {
    prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
    return prev;
  }, {});
  };

   answer() {
    this.result2 = console.log(this.getCount('lo@ lo@ l'));
    this.result3 = this.getKeys(this.input); //1st question example
    this.result4a = this.sample.split("").reverse().join("");
    this.result4b =  this.reverse(this.input4b);
    for (const i in this.string) {
      if(this.result5.indexOf(this.string[i]) == -1) {
        this.result5.push(this.string[i])
      }
    }
    }
}
