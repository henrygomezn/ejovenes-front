import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  posicion=0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navegador(id):void{
 console.log(id);
 

    if (id==0){
      this.router.navigate(['/adminAccess/admin'])
     }

     if (id==1){
      this.router.navigate(['/adminAccess/usuarios'])
     }
     if (id==2){
      this.router.navigate(['/adminAccess/cuentos'])
     }
     if (id==3){
      this.router.navigate(['/adminAccess/concursos'])
     }
     if (id==4){
      this.router.navigate(['/adminAccess/votos'])
     }
     if (id==5){
      this.router.navigate(['/adminAccess/noticias'])
     }


   }
}

