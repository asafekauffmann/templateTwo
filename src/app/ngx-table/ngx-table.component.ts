import { PaginationService } from './../pagination.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-ngx-table',
   templateUrl: './ngx-table.component.html',
   styleUrls: ['./ngx-table.component.scss']
})
export class NgxTableComponent implements OnInit {

   Articles: any;
   page = 1;
   count = 0;
   tableSize = 8;
   tableSizesArr = [4, 8, 12];

   constructor(private pagiantionService: PaginationService) { }

   ngOnInit(): void {
      this.showData();
   }

   showData(): void {
      this.pagiantionService.fetchPosts()
         .subscribe(
            res => {
               this.Articles = res;
               console.log(res);
            },
            err => {
               console.log(err);
            } 
         );
   }

   tabSize(event: any) {
      this.page = event;
      this.showData();
   }

   tableData(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.showData();
   }

}
