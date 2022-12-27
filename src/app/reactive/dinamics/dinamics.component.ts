import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.css']
})
export class DinamicsComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ], Validators.required)
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.myForm.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoEsValido(campo: string) {
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched
  }

  agregarFavorito() {
    if(this.newFavorite.invalid) return;
    // this.favoritosArr.push(new FormControl(this.newFavorite.value, Validators.required));
    this.favoritosArr.push(this.fb.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  borrar(index: number) {
    this.favoritosArr.removeAt(index);

  }

  guardar() {
    if(this.myForm.valid) {
      console.log(this.myForm.value);
    }else{
      this.myForm.markAllAsTouched();
      return;
    }
  }

}
