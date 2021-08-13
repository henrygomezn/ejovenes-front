import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MisCuentosComponent } from './mis-cuentos/mis-cuentos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ParticipacionesComponent } from './participaciones/participaciones.component';
import { SubirCuentoComponent } from './subir-cuento/subir-cuento.component';
import { FichaCuentoComponent } from './ficha-cuento/ficha-cuento.component';

import { ContactoComponent } from './shared/contacto/contacto.component';
import  { PdfViewerModule }  from  'ng2-pdf-viewer';
import { LoginAdminComponent } from './adminAccess/login-admin/login-admin.component';
import { BoardAdminComponent } from './adminAccess/board-admin/board-admin.component';
import { UsuariosComponent } from './adminAccess/usuarios/usuarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CuentosComponent } from './adminAccess/cuentos/cuentos.component';
import { ConcursosComponent } from './adminAccess/concursos/concursos.component';
import { VotosComponent } from './adminAccess/votos/votos.component';
import { NoticiasComponent } from './adminAccess/noticias/noticias.component';
import { FilterUPipe } from './pipes/filter-u.pipe';
import { FilterCPipe } from './pipes/filter-c.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BoardUserComponent,
    NavbarComponent,
    MisCuentosComponent,
    FooterComponent,
    RegistrarComponent,
    ParticipacionesComponent,
    SubirCuentoComponent,
    FichaCuentoComponent,
    ContactoComponent,
    LoginAdminComponent,
    BoardAdminComponent,
    UsuariosComponent,
    SidebarComponent,
    CuentosComponent,
    ConcursosComponent,
    VotosComponent,
    NoticiasComponent,
    FilterUPipe,
    FilterCPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
