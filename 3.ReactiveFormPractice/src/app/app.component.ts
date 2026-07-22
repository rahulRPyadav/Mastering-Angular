import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userForm: FormGroup;
  userList: any[] = [];

  constructor(private formBulider: FormBuilder) {
    this.userForm = this.formBulider.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      address: this.formBulider.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
      phoneNumbers: this.formBulider.array([
        this.formBulider.control('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/),
        ]),
      ]),
    });
  }

  get phoneNumbers() {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  removePhoenNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.formBulider.control('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ])
    );
  }

  submitForm() {
    if (this.userForm.valid) {
      this.userList.push({
        ...this.userForm.value,
        phoneNumbers: [...this.userForm.value.phoneNumbers],
      });

      console.log(this.userList);

      this.userForm.reset();

      this.phoneNumbers.clear();

      this.phoneNumbers.push(
        this.formBulider.control('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/),
        ])
      );
    }
  }
}