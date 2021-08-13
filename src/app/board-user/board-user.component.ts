import { Component, OnInit } from '@angular/core';
import { CuentosService } from '../_services/cuentos.service';
import {TokenStorageService} from '../_services/token-storage.service';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  posicion=0;
  loading=false;
  isLoggedIn=true;
  flag=false;
  cargaNews=false;
  errorMessage="";
  api=environment.API_URL;
  nameWelcome="";
  last:any;
  noticia:any;
  cargaVotados=false;

 
  constructor(private cuentoService: CuentosService,private tokenStorageService: TokenStorageService, private router: Router, private userService: UserService ) { }

  ngOnInit(): void {

 console.log(this.tokenStorageService.getUser());
 
   this.imgAvatar(this.tokenStorageService.getUser().sexo);
  
   this.nameWelcome=this.tokenStorageService.getUser().username.toUpperCase();
   
   this.cuentoService.getMasVotados().subscribe(
    dataCuento => {
      if(!(dataCuento.length==0)){
        this.cargaVotados=true;
       }

     this.last=dataCuento;

    },
    err => {
      this.errorMessage = err;
  
    }
  );



  this.userService.getNoticias().subscribe(
    dataNew => {
      if(!(dataNew.length==0)){
        this.cargaNews=true;
       }
    console.log(dataNew);
    
     this.noticia=dataNew;

    },
    err => {
      this.errorMessage = err;
  
    }
  );




    setTimeout(() => {
      this.loading=true;
      
     }, 500);
 
    
   




  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  navegador(posicion):void{

    if(posicion==1){
      this.router.navigate(['misCuentos']).then(_ => console.log('nos juimos'));
    }
    

    if(posicion==2){
      this.router.navigate(['subirCuento']).then(_ => console.log('nos juimos'));
      
    }

    if(posicion==3){
   this.router.navigate(['participaciones']).then(_ => console.log('nos juimos'));
      
    }


  }

  imgAvatar(genero): void{
       
    if(genero=="Femenino")
    {
     this.flag=false;
      
    }
    if(genero=="Masculino"){
    this.flag=true;
    }

  }


}

