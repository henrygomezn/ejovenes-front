import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MisCuentosComponent} from './mis-cuentos/mis-cuentos.component'
import { BoardUserComponent } from './board-user/board-user.component';
import {ParticipacionesComponent} from './participaciones/participaciones.component';

import {SubirCuentoComponent} from './subir-cuento/subir-cuento.component';
import {FichaCuentoComponent} from './ficha-cuento/ficha-cuento.component';
import {LoginAdminComponent} from './adminAccess/login-admin/login-admin.component';
import {BoardAdminComponent} from './adminAccess/board-admin/board-admin.component';
import {UsuariosComponent} from './adminAccess/usuarios/usuarios.component';
import {CuentosComponent} from './adminAccess/cuentos/cuentos.component';
import {ConcursosComponent} from './adminAccess/concursos/concursos.component';
import {VotosComponent} from './adminAccess/votos/votos.component';
import {NoticiasComponent} from './adminAccess/noticias/noticias.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'participaciones', component: ParticipacionesComponent },
  { path: 'subirCuento', component: SubirCuentoComponent },
  { path: 'fichaCuento', component: FichaCuentoComponent },
  { path: 'misCuentos', component: MisCuentosComponent },
  { path: 'adminAccess', component: LoginAdminComponent },
  { path: 'adminAccess/admin', component: BoardAdminComponent },
  { path: 'adminAccess/usuarios', component: UsuariosComponent },
  { path: 'adminAccess/cuentos', component: CuentosComponent },
  { path: 'adminAccess/concursos', component: ConcursosComponent },
  { path: 'adminAccess/votos', component: VotosComponent },
  { path: 'adminAccess/noticias', component: NoticiasComponent },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
