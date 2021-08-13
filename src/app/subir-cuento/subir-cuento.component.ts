import { Component, OnInit } from '@angular/core';
import {CuentosService} from '../_services/cuentos.service';
import {TokenStorageService} from '../_services/token-storage.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {ImageServiceService} from '../_services/image-service.service'



class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
class pdfSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-subir-cuento',
  templateUrl: './subir-cuento.component.html',
  styleUrls: ['./subir-cuento.component.css']
})
export class SubirCuentoComponent implements OnInit {
  errorMessage="";
  newCuento: any = {};


  selectedFile: ImageSnippet;
  selectedPdf: pdfSnippet;

  constructor(private cuentosService: CuentosService, private tokenStorageService: TokenStorageService, private router: Router, private imageService: ImageServiceService ) { }

  ngOnInit(): void {
  }


  onSubmit(imageInput: any, pdfInput:any): void{

    const file: File = imageInput.files[0];
    const file2: File = pdfInput.files[0];
    const reader = new FileReader();
    const reader2 = new FileReader();
  
   this.newCuento.concurso_id=1;
   this.newCuento.contVotos=0;
   this.newCuento.titulo = this.newCuento.titulo.toUpperCase();
   this.newCuento.usuario_id=this.tokenStorageService.getUser().id;
   console.log(this.newCuento);
   
   this.cuentosService.crearCuento(this.newCuento).subscribe(
     dataCuento => {
      console.log(dataCuento);
    //  setTimeout(() => {
    //   window.location.reload();
    //  }, 300);

    console.log(dataCuento);
    

    if (file)
   {
    reader.addEventListener('load', (event: any) => {
      console.log("subio arch");
      

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file,dataCuento.id).subscribe(
        (res) => {
          console.log("Subio img correctamente");
          
        },
        (err) => {
        
        });
    });

    reader.readAsDataURL(file);
   }
    else
    console.log("no existe IMG");
    
  
    if (file2)
    {
      reader2.addEventListener('load', (event: any) => {
 
       this.selectedPdf = new pdfSnippet(event.target.result, file2);
 
       this.imageService.uploadPdf(this.selectedPdf.file,dataCuento.id).subscribe(
         (res) => {
           console.log("Subio pdf correctamente");
           
         },
         (err) => {
         
         });
     });
 
     reader2.readAsDataURL(file2);
    }
     else
     console.log("no existe pdf");


    Swal.fire({
      title: '¡Registro exitoso!',
      text: 'Cuento creado con exito.',
      icon: 'success',
      confirmButtonText: 'OK'
     }).then((result) => {

      if (result.isConfirmed){
        this.router.navigate(['user'])
      }

     })


     },
     err => {
      Swal.fire({
        icon: 'error',
        title: 'Cuento no ha podido ser registrado',
        text: 'Razon datos faltantes o titulo ya existente'
      })
   
     }
   );


   
  }




}
