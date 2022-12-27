import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    // condiciones: [false, Validators.required]
    condiciones: [false, Validators.requiredTrue]
    
  })

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      ... this.persona,
      condiciones: false
    });

    // this.myForm.get('condiciones')?.valueChanges.subscribe (newValue => {
    //   console.log(newValue);
      
    // });

    this.myForm.valueChanges.subscribe( ({condiciones, ...resto}) => {
      // delete form.condiciones;
      this.persona = resto;
      
    })
  }

  guardar() {
    const formValue = {...this.myForm.value};
    delete formValue.condiciones;

    this.persona = formValue;
  }


  

}
