import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {AdminService} from '../../_services/admin.service';
import Swal from 'sweetalert2';
import {UserService} from '../../_services/user.service'


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  cargaDatos=false;
  infoDash: any = {};
  errorMessage="";
  infoAdmin: any = {};
  infoNew: any = {};
  constructor(private tokenStorageService: TokenStorageService, private adminService: AdminService, private userService: UserService) { }

  ngOnInit(): void {

  if(this.tokenStorageService.getUser().rol_id==1){
    
  this.cargaDatos=true;

  this.adminService.getDashboard().subscribe(
    dataDash => {
    
    console.log(dataDash);


    this.infoDash=dataDash;

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


  registrarAdmin(): void{
   
    this.infoAdmin.rol_id = 1
    console.log(this.infoAdmin);
    
    
    this.userService.crearUsuario(this.infoAdmin).subscribe(
      dataUser => {
       console.log(dataUser);
   
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario registrado con exito.',
        showConfirmButton: false,
        timer: 1000
      })
     // this.newUser="";

     //  setTimeout(() => {
     //   window.location.reload();
     //  }, 300);
    
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


  registrarNoticia(): void{
   
    
    console.log(this.infoNew);
    
    
    this.adminService.crearNoticia(this.infoNew).subscribe(
      dataNoticia => {
       console.log(dataNoticia);
   
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Noticia registrada con exito.',
        showConfirmButton: false,
        timer: 1000
      })
     // this.newUser="";

     //  setTimeout(() => {
     //   window.location.reload();
     //  }, 300);
    
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
