import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, pipe, take } from 'rxjs';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  dataMenu: any;

  constructor(
    private apiServ: ApiService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getFishSpecies();
  }

  getFishSpecies() {
    this.apiServ.getFishSpecies()
    .subscribe((res) => {
      this.dataMenu = res;
      console.log('dataMenu: ', res);
    });
  }

  irUserScreen(){
    this.route.navigate(['user-screen']);
  }
}
