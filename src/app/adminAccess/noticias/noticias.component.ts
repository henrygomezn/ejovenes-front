import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {AdminService} from '../../_services/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  pageSize = 10;
  page =0;
   data:any;
  cargaDatos=false;
   errorMessage="";
   totalElem=0;
  constructor(private tokenStorageService: TokenStorageService, private adminService: AdminService) { }

  ngOnInit(): void {

    if(this.tokenStorageService.getUser().rol_id==1){
    
      this.adminService.getNoticias().subscribe(
        dataNew => {
        console.log(dataNew);
        
         this.data=dataNew;
  
         this.totalElem=dataNew.length;
  
         this.page=  Math.round(dataNew.length/10);
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
      title: '¿Estas seguro de eliminar la noticia?',
      text: "Si aceptas no podras revertir el cambio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar.'
    }).then((result) => {
      if (result.isConfirmed) {
  
      this.adminService.eliminarNoticia(id).subscribe(
        dataNew => {
       
          console.log(dataNew);
          Swal.fire({
            title: '¡Eliminado!',
            text: 'Noticia ha sido eliminada con exito.',
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
