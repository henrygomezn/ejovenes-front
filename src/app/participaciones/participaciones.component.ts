import { Component, OnInit } from '@angular/core';
import {CuentosService} from '../_services/cuentos.service';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-participaciones',
  templateUrl: './participaciones.component.html',
  styleUrls: ['./participaciones.component.css']
})
export class ParticipacionesComponent implements OnInit {

  errorMessage="";
  id=0;
  ultimo:any;
  searchId: any = {};
  searchTit: any = {};
  cargaDatosId=false;
  cargaDatosTit=false;
 api=environment.API_URL;
  constructor(private cuentosService: CuentosService,private router: Router) { }

  ngOnInit(): void {

    this.cuentosService.getUltCuentos().subscribe(
      dataCuento => {
       console.log(dataCuento);
       this.ultimo=dataCuento;

      },
      err => {
        this.errorMessage = err;
    
      }
    );

  }

  asignarId(id:string){
 
    console.log(id);
  
  this.cuentosService.saveCuento(id);
  this.router.navigate(['fichaCuento']).then(_ => console.log("asdasdasd"));
  }


 buscarId(id){

  this.cargaDatosTit=false;
   this.cuentosService.obtenerFicha(id).subscribe(
    dataCuento => {
       this.cargaDatosId=true;

       this.searchId=dataCuento;


  console.log(this.searchId);
  
     
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cuento no encontrado :('

      })
      this.errorMessage = err;

    }
  );

 }


 buscarTit(cadena){

  this.cargaDatosId=false;
  console.log(cadena);

  this.cuentosService.porTitulos(cadena).subscribe(
    dataCuento => {
       console.log(dataCuento);
      
      if (dataCuento.length==0){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Cuento no encontrado :('
  
        })
        
      }
      else{
        this.searchTit=dataCuento;
      this.cargaDatosTit=true;
      }


    },
    err => {
    
      this.errorMessage = err;

    }
  );

  
 }


}
