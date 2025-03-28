import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core'; // Ensure this is included


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  form = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    tl: new FormControl(''),
    group_type: new FormControl(''),
    group: new FormControl(''),
    date: new FormControl(''),
    module: new FormControl(''),
    lesson: new FormControl(''),
    lesson_recording: new FormControl(''),
  })

  constructor(@Inject(DOCUMENT) document: Document){
    this.form.setValue({
      email: 'laura.serrano.kod@gmail.com', 
      name: 'Daniela Villanova | 1238204', 
      tl: 'German Moreno',
      group_type: 'Premium group (PRM_COL...)',
      group: '4784',
      date: '02/03/2025',
      module: '2',
      lesson: '1',
      lesson_recording: 'aaaaaa'
    })
  }

  onSubmit(){
    console.log(this.form.value)
  }

}
