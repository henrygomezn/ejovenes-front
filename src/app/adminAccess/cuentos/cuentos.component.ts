import { Component, OnInit } from '@angular/core';
import { CuentosService } from '../../_services/cuentos.service';
import {environment} from '../../../environments/environment';
import {TokenStorageService} from '../../_services/token-storage.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.component.html',
  styleUrls: ['./cuentos.component.css']
})
export class CuentosComponent implements OnInit {
  pageSize = 10;
 page =0;
  data:any;
 cargaDatos=false;
  errorMessage="";
  totalElem=0;
 filterCuento='';
  api=environment.API_URL;

  constructor(private cuentosService: CuentosService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    if(this.tokenStorageService.getUser().rol_id==1){
    
      this.cuentosService.getCuentos().subscribe(
        dataCuento => {
        console.log(dataCuento);
        
         this.data=dataCuento;
  
         this.totalElem=dataCuento.length;
         
         this.page=  Math.round(dataCuento.length/10);
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
            confirmButtonText: 'OKA'
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
