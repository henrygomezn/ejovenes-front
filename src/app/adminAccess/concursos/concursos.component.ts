import { Component, OnInit } from '@angular/core';
import { CuentosService } from '../../_services/cuentos.service';
import {environment} from '../../../environments/environment';
import {TokenStorageService} from '../../_services/token-storage.service';
import Swal from 'sweetalert2';
import {AdminService} from '../../_services/admin.service';


@Component({
  selector: 'app-concursos',
  templateUrl: './concursos.component.html',
  styleUrls: ['./concursos.component.css']
})
export class ConcursosComponent implements OnInit {
  pageSize = 10;
 page =0;
  data:any;
 cargaDatos=false;
  errorMessage="";
  totalElem=0;
  infoConcurso: any = {};
  api=environment.API_URL;

  constructor(private cuentosService: CuentosService,private tokenStorageService: TokenStorageService, private adminService: AdminService) { }

  ngOnInit(): void {
    if(this.tokenStorageService.getUser().rol_id==1){
    
      this.cuentosService.getConcursos().subscribe(
        dataConcurso => {
        console.log(dataConcurso);
        
         this.data=dataConcurso;
  
         this.totalElem=dataConcurso.length;
        

         this.page=  Math.round(dataConcurso.length/10);
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
      title: '¿Estas seguro de eliminar el concurso?',
      text: "Si aceptas no podras revertir el cambio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar.'
    }).then((result) => {
      if (result.isConfirmed) {
  
      this.adminService.eliminarConcurso(id).subscribe(
        dataConcurso => {
       
          console.log(dataConcurso);
          Swal.fire({
            title: '¡Eliminado!',
            text: 'El concurso ha sido eliminado con exito.',
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



  



   registrarConcurso(): void{
   
    
    console.log(this.infoConcurso);
    
    
    this.adminService.crearConcurso(this.infoConcurso).subscribe(
      dataNoticia => {
       console.log(dataNoticia);
   
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Concurso registrado con exito.',
        showConfirmButton: false,
        timer: 1000
      })
     // this.newUser="";
  
       setTimeout(() => {
        window.location.reload();
       }, 1000);
    
      },
      err => {
        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Datos ingresados erroneos'
   
      })


      }
    );

    
  }





}
