import { Component, OnInit, Input } from '@angular/core';
import {CuentosService} from '../_services/cuentos.service';
import {VotosService} from '../_services/votos.service';
import Swal from 'sweetalert2';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-ficha-cuento',
  templateUrl: './ficha-cuento.component.html',
  styleUrls: ['./ficha-cuento.component.css']
})
export class FichaCuentoComponent implements OnInit {

  id_cuento=0;
  errorMessage="";
  ficha:any;
  idUser=0;
  idCuento=0;
  idConcurso=1;
  cargaDatos=false;
  flagVotacion= false;
  flagImg= false;
  cadenaUrl="";
  pdfSource =  environment.API_URL;
  api=environment.API_URL;


  constructor(private cuentosService: CuentosService, private votosService: VotosService) {
  
   
   }

  ngOnInit(): void {

   
   
   this.id_cuento = Number(this.cuentosService.getCuento());


   

    this.cuentosService.obtenerFicha(this.id_cuento).subscribe(
      dataCuento => {
     this.ficha=dataCuento;
       this.cargaDatos=true;
      this.idUser = dataCuento.usuario_id;
      this.idCuento = dataCuento.id;
      this.idConcurso = dataCuento.concurso_id;
      console.log(dataCuento);
      this.pdfSource = this.pdfSource + dataCuento.urlPdf;


  

  console.log(this.pdfSource);
  

  

      if(dataCuento.urlAvatar)
      this.flagImg=true;
      else
    this.flagImg =false;
      
      
      

   this.votosService.validarVoto(this.idUser,this.idCuento,this.idConcurso).subscribe(
          dataVoto =>{

            

            console.log(dataVoto.resp);
          
            this.flagVotacion= dataVoto.resp;

     

            


          }


   );


      console.log(dataCuento.usuario_id);
      
          



       
      },
      err => {
        this.errorMessage = err;

      }
    );


  }


  registrarVoto(id):void {


   console.log(id);


   this.votosService.crearVoto(this.idUser,this.idCuento,this.idConcurso).subscribe(
    dataVoto =>{
          console.log(dataVoto);
          


    },
    err => {
      this.errorMessage = err;

    }
  );







   this.cuentosService.contadorVotos(id).subscribe(
    dataCuento => {

    console.log(dataCuento);
    
           Swal.fire({
          title: '¡Voto registrado!',
          text: 'Su intencion de voto ha sido registrada con exito.',
          icon: 'success',
          confirmButtonText: 'OK'
         }).then((result) => {

          if (result.isConfirmed){
            window.location.reload();
          }

         });
    },
    err => {
      this.errorMessage = err;

    }
  );

   

  }

}
