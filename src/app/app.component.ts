import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   dados: Array<{ id: number, nome: string }> = [];

   constructor() {
      this.dados = [
         {
            "id": 442,
            "nome": "Murtle"
         },
         {
            "id": 443,
            "nome": "George"
         }
      ];
   };
   
}
