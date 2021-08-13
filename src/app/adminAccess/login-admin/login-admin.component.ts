import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { UserService} from '../../_services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  form: any = {};
  isLoggedInAdmin = false;
  isLoginFailed = false;
  errorMessage = '';

  tokencito: string= "asdasd";
  actUser: any = {};

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken() && this.tokenStorage.getUser().rol_id==1 ){
      this.isLoggedInAdmin = true;
      if(this.isLoggedInAdmin){
        this.router.navigate(['/adminAccess/admin'])
      }
    }

  }


  onSubmit(): void {


    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);  //guarda token
     

        this.userService.getCurrentUser().subscribe(
          current => {

            if (current.rol_id==1){
              this.tokenStorage.saveUser(current); // guarda usuario tokenstorage
              this.router.navigate(['/adminAccess/admin']) 
              
            }

       //     this.router.navigate(['/adminAccess/admin']) 
  
          },
          err => {
            this.errorMessage = err.error.message;
            console.log("aqui cago");
          }
        );

        this.isLoginFailed = false;
        this.isLoggedInAdmin = true;

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );



  }


  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
