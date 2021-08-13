import { Component, OnInit } from '@angular/core';
import { VotosService } from '../../_services/votos.service';
import {environment} from '../../../environments/environment';
import {TokenStorageService} from '../../_services/token-storage.service';


@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html',
  styleUrls: ['./votos.component.css']
})
export class VotosComponent implements OnInit {
  pageSize = 10;
  page =0;
   data:any;
  cargaDatos=false;
   errorMessage="";
   totalElem=0;


  constructor(private votoService: VotosService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    if(this.tokenStorageService.getUser().rol_id==1){
    
      this.votoService.getVotos().subscribe(
        dataVoto => {
        console.log(dataVoto);
        
         this.data=dataVoto;
  
         this.totalElem=dataVoto.length;
  
         this.page=  Math.round(dataVoto.length/10);
         console.log(this.page);
        this.cargaDatos=true;
  
        },
        err => {
          this.errorMessage = err;
  
        }
      );

      }
     else
     console.log("no tiene acceso");



  }


  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


}
