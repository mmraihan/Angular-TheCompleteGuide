import { flatten } from '@angular/compiler';
import { newArray } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Mubasshir raihan';

  getName(data: number): string {
    if (data === 1) return 'Hello From ' + data;
    else {
      return 'Hello from with value ' + data;
    }
  }

  employees = ['Emp-1', 'Emp-2'];

  employee = {
    name: 'Mubasshir Raihan',
    title: 'Software Engineer',
    src: "",
    alt: "Pro Pic"
  };

  clickSave(): void{
    this.name="Updated Mubasshir Raihan"
  }
  over(): void{
    this.name="Over Clicked"
  }

  isDisabled=false

  userData: any={}

  getData(data: NgForm){
    console.warn(data)
    this.userData=data;
  }
 display=false;
  toggle(){
    this.display=!this.display
  }
}

