import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService} from '../_services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  tokencito: string= "asdasd";
  actUser: any = {};

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
    if (this.tokenStorage.getToken() && this.tokenStorage.getUser().rol_id==2 ){
      this.isLoggedIn = true;
      if(this.isLoggedIn){
        this.router.navigate(['/user'])
      }
    }
    //  this.roles = this.tokenStorage.getUser().roles;
 
    
  }

  onSubmit(): void {


    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);  //guarda token
     

        this.userService.getCurrentUser().subscribe(
          current => {

            this.tokenStorage.saveUser(current);  // guarda usuario tokenstorage
            this.router.navigate(['/user']) 
  
          },
          err => {
            this.errorMessage = err.error.message;
            console.log("aqui cago");
          }
        );

        this.isLoginFailed = false;
        this.isLoggedIn = true;

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );



  }



   registrar(): void{

   }



  reloadPage(): void {
    window.location.reload();
  }

}
