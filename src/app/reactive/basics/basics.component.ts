import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit{

  myForm: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.required, Validators.min(0)]],
    existencias: [ , [Validators.required, Validators.min(0)]]
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({
      // this.myForm.setValue({ // con setValue hay q definir cada campo del form o da error, con el reset no
      nombre: 'RTX 4080ti',
      precio: 16,
    })
  }

  // myForm: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5)
  // })

  campoNoEsValido(campo:string) {
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched
  }

  guardar() {

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
    
  }




}
