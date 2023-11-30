import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup } from "@angular/forms"
import { DatePipe, formatDate, Location  } from '@angular/common';
import { FormUserService } from '../form-user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(
    private FormUserService: FormUserService, 
    private location: Location,
    private router: Router
    ){}
  // times = ['Asian','North American','African','UNK','Latin American'];
  // target = ['M','F','X'];
  times = ['1 year','1 year','1 year'];
  target = ['CPU'];

  model = new User('Nombre Apellido', this.target[0], 18, this.times[0]);

  submitted = false;
  personForm = new FormGroup({
    name: new FormControl("NFS"),
    age: new FormControl(100),
    target: new FormControl("Male"),
    time: new FormControl("Asian")

  })
  onSubmit() {
    this.submitted = true; 
    const currentDate = new Date();
    const mes = formatDate(currentDate, 'MM', 'en-US');
    const hora = formatDate(currentDate, 'HH', 'en-US');
    console.log(this.personForm.value);
    console.log(this.personForm.value.name)
    console.log(hora)
    this.FormUserService.doPredict(
      this.personForm.value.age,
      this.personForm.value.target,
      this.personForm.value.time,
      mes,
      hora
    )
    // window.location.reload();
    this.router.navigate(['/chart']);
  }


  newUser() {
    this.model = new User('', '',17,'');
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

}
