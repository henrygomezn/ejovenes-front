import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../_services/user.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  errorMessage="";
  flag=false;
  newUser: any = {};

  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(): void{
    this.newUser.rol_id = 2

    console.log(this.newUser);
    
    
    this.userService.crearUsuario(this.newUser).subscribe(
      dataUser => {
       console.log(dataUser);
       this.closebutton.nativeElement.click();

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



}
