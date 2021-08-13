import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,  private router: Router) { }

  isLoggedIn=false;

  ngOnInit(): void {

    this.isLoggedIn=true;
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  navegador(posicion):void{
    this.router.navigate(['user']).then(_ => console.log('nos juimos'));

  }

}
