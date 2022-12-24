import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    producto: 'RTX 4080i',
    precio: 10,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }
  validName(): boolean {
    return this.myForm?.controls.producto?.invalid && this.myForm?.controls.producto?.touched;
  }

  validPrice(): boolean {
    // this.myForm?.controls?.precio?.setErrors(null);
    return this.myForm?.controls.precio?.touched && this.myForm?.controls.precio?.value < 0; 
  }

  // save(form: NgForm) {
  save() {
    console.log(this.myForm);
    this.myForm.resetForm({
      precio: 0,
      existencias: 0
    });
  }

}
