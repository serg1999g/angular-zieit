import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MyValidator } from './my.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  form: FormGroup
  ngOnInit() {
   this.form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required, MyValidator.restrictedEmails]),
     password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])), //min 4 max 10 simbol pass
     address: new FormGroup({
      country: new FormControl('ua'),
      city: new FormControl('Запорожье', [Validators.required, Validators.minLength(3)]), //min 3 simbols
    }),
    skills: new FormArray([])   
   })
  }

  submit() {
    const formControl = {...this.form.value}
    console.log(formControl)
    this.form.reset()
  }

  setCapital() {
    const mapCity = {
      ua: "Киев",
      pl: "Варшава",
      de: "Берлин"
    }
    const getCity = this.form.get('address').value.country
this.form.get('address').patchValue({city: mapCity[getCity]});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
     (<FormArray>this.form.get('skills')).push(control);
   }

   removeItem(index) { //delete task
    (<FormArray>this.form.get('skills')).removeAt(index);
  }
   

}
