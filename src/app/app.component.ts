import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   dados: Array<{ 
      id: number, 
      paciente: string, 
      recepcao: string, 
      especialidades: string,
      profissional: string,
      tempoDeEspera: string,
      teleconsulta: any,
      retornoPaciente: string 
   }> = [];

   constructor(private auth: AuthService) {
      this.dados = [
         {
            "id": 1,
            "paciente": "Martin Luther",
            "recepcao": "12/06/2021",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "sim"
         },
         {
            "id": 2,
            "paciente": "Lenny Love",
            "recepcao": "17/05/2020",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "sim"
         },
         {
            "id": 3,
            "paciente": "Rose Defa",
            "recepcao": "11/02/2020",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "não"
         },
         {
            "id": 4,
            "paciente": "Dant Roy",
            "recepcao": "21/06/2019",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "sim"
         },
         {
            "id": 5,
            "paciente": "Naty Mad",
            "recepcao": "11/11/2017",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "não"
         },
         {
            "id": 6,
            "paciente": "Alle James",
            "recepcao": "11/07/2015",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "sim"
         },
         {
            "id": 7,
            "paciente": "Ana Ribas",
            "recepcao": "11/06/2012",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "não"
         },
         {
            "id": 8,
            "paciente": "Lenny Scard",
            "recepcao": "11/03/2011",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "não"
         },
         {
            "id": 9,
            "paciente": "Rob Dirdeck",
            "recepcao": "11/10/2016",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "sim"
         },
         {
            "id": 10,
            "paciente": "Paty Maned",
            "recepcao": "11/09/2019",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "sim"
         },
         {
            "id": 11,
            "paciente": "Ana Ribas",
            "recepcao": "11/06/2012",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "não"
         },
         {
            "id": 12,
            "paciente": "Lenny Scard",
            "recepcao": "11/03/2011",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "não"
         },
         {
            "id": 13,
            "paciente": "Rob Dirdeck",
            "recepcao": "11/10/2016",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "sim"
         },
         {
            "id": 14,
            "paciente": "Paty Maned",
            "recepcao": "11/09/2019",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "sim"
         },
         {
            "id": 15,
            "paciente": "Ana Ribas",
            "recepcao": "11/06/2012",
            "especialidades": "Clínica médica",
            "profissional": "Usuário Otto",
            "tempoDeEspera": "7642 horas",
            "teleconsulta": "icon",
            "retornoPaciente": "não"
         }
      ];
   };

   ngOnInit(): void {
       this.getData();
   }
   
   p:any;
   data:any=[];
   
   getData() {
     this.auth.getData().subscribe(
       (data) => {
         this.data = data;
         console.log(this.data);
       }
     );
   }
}
