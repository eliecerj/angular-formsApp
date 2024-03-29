import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.css']
})
export class DinamicsComponent {

  @ViewChild('myForm') myForm!: NgForm;
  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      { id: 1, nombre: 'Metal Gear'},
      { id: 2, nombre: 'DeathStranding'},
    ]
  }

  // invalidName(): boolean {
  //   return this.myForm?.controls.name.errors && this.myForm?.controls.name.touched;
  // }

  save() {
    console.log('culo');
    
  }
  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({ ... nuevoFavorito });
    this.nuevoJuego = '';
  }
  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);

  }

}
