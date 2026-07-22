import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:{name:string; email:string; number:string; address:string;}={
    name:'',
    email:'',
    number:'',
    address:'',
  };

  submitForm(form:NgForm){
    if(form.valid){
      console.log(form.value, this.user);
    }
  }
}
