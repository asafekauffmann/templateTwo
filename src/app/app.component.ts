import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   dados: Array<{ id: number, paciente: string, recepcao: string }> = [];

   constructor() {
      this.dados = [
         {
            "id": 1,
            "paciente": "Martin Luther",
            "recepcao": "12/06/2021"
         },
         {
            "id": 2,
            "paciente": "Lenny Love",
            "recepcao": "17/05/2020"
         },
         {
            "id": 3,
            "paciente": "Rose Defa",
            "recepcao": "11/02/2020"
         },
         {
            "id": 4,
            "paciente": "Dant Roy",
            "recepcao": "21/06/2019"
         },
         {
            "id": 5,
            "paciente": "Naty Mad",
            "recepcao": "11/11/2017"
         },
         {
            "id": 6,
            "paciente": "Alle James",
            "recepcao": "11/07/2015"
         },
         {
            "id": 7,
            "paciente": "Ana Ribas",
            "recepcao": "11/06/2012"
         },
         {
            "id": 8,
            "paciente": "Lenny Scard",
            "recepcao": "11/03/2011"
         },
         {
            "id": 9,
            "paciente": "Rob Dirdeck",
            "recepcao": "11/10/2016"
         },
         {
            "id": 10,
            "paciente": "Paty Maned",
            "recepcao": "11/09/2019"
         }
      ];
   };
   
}
