import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    //standalone: true,
    //imports: [RouterOutlet],
    template: `
      <button (click)="save($event)">Guardar</button>
    `,
    styles: [`/*./app.component.css
      .activo{
        background: green
      }*/
    `]
})
export class AppComponent {
    //mensaje = 'Curso de ANgular';
    /*nombre = 'Camila'

    getNombre(){
      return this.nombre
    }

    isActive = true*/

    save(e: any){
        console.log(e)
    }
}
