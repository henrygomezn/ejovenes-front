import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {AdminService} from '../../_services/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  pageSize = 10;
 page =0;
  data:any;
 cargaDatos=false;
  errorMessage="";
  totalElem=0;
  filterUsuario='';
  constructor(private userService: UserService,private tokenStorageService: TokenStorageService, private adminService: AdminService) { }

  ngOnInit(): void {
 
    if(this.tokenStorageService.getUser().rol_id==1){
    
      this.userService.getUsuarios().subscribe(
        dataUser => {
        console.log(dataUser);
        
         this.data=dataUser;
  
         this.totalElem=dataUser.length;
  
         this.page=  Math.round(dataUser.length/10);
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
      title: '¿Estas seguro de eliminar el usuario?',
      text: "Si aceptas no podras revertir el cambio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar.'
    }).then((result) => {
      if (result.isConfirmed) {
  
      this.adminService.eliminarUsuario(id).subscribe(
        dataUser => {
       
          console.log(dataUser);
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
