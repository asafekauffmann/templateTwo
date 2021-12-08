import { 
   Component, 
   ContentChildren, 
   Input, 
   QueryList, 
   TemplateRef 
   } 
from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

   @ContentChildren('coluna') colunas: QueryList<TemplateRef<any>> | undefined;
   @ContentChildren('header') headers: QueryList<TemplateRef<any>> | undefined;
   @Input() dados: Array<any> | null = null;

   constructor() {

   }

}
