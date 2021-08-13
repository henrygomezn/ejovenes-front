import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../_services/token-storage.service';
import {CuentosService} from '../_services/cuentos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mis-cuentos',
  templateUrl: './mis-cuentos.component.html',
  styleUrls: ['./mis-cuentos.component.css']
  
})
export class MisCuentosComponent implements OnInit {
  errorMessage="";
  test:any;
  cargaDatos=false;
  miArray: any[] = [];
  prueba: number;
  constructor(private tokenStorageService: TokenStorageService, private cuentosService: CuentosService,private router: Router) { 

  }

  ngOnInit(): void {

    
    this.cuentosService.getMisCuentos(this.tokenStorageService.getUser().id).subscribe(
      dataUser => {
   
       if (dataUser.length==0){
         this.cargaDatos=false;
       }
       else
       {
         this.cargaDatos=true;
       }

      
       
       
    this.test=dataUser
    
       
      },
      err => {
        this.errorMessage = err;

      }
    );
    
  }

  rutaSubirCuento(): void{
    this.router.navigate(['subirCuento']).then(_ => console.log("asdasdasd"));
   
  }

  asignarId(id:string){
 
    console.log(id);
  
  this.cuentosService.saveCuento(id);
  this.router.navigate(['fichaCuento']).then(_ => console.log("asdasdasd"));
  }


 eliminar(id){

  console.log(id);
  
  Swal.fire({
    title: '¿Estas seguro de eliminar el cuento?',
    text: "Si aceptas no podras revertir el cambio",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, eliminar.'
  }).then((result) => {
    if (result.isConfirmed) {

    this.cuentosService.eliminarCuento(id).subscribe(
      dataCuento => {
     
        console.log(dataCuento);
        Swal.fire({
          title: '¡Eliminado!',
          text: 'El cuento ha sido eliminado con exito.',
          icon: 'success',
          confirmButtonText: 'OK'
         }).then((result) => {

          if (result.isConfirmed){
            window.location.reload();
          }

         })
        
       },
       err => {
         
 
       }

    );

    }
  })



 }

}

