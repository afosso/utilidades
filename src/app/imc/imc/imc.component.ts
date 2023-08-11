  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

  @Component({
    selector: 'app-imc',
    templateUrl: './imc.component.html',
    styleUrls: ['./imc.component.css']
  })
  export class ImcComponent implements OnInit {

    public frmImc: FormGroup;
    public mostrarPeso = true;

    constructor(private toastr: ToastrService) { 
      this.frmImc = new FormGroup({
        peso: new FormControl(null, Validators.required),
        estatura: new FormControl(null, Validators.required)
      });
    }

    ngOnInit(): void {
    }

    calcularIMC() {

      if (this.frmImc.invalid) {
        this.toastr.error('Error', 'Existen campos vacios')
        return;
      }

      let peso = parseFloat(this.frmImc.controls['peso'].value);
      let estatura = parseFloat(this.frmImc.controls['estatura'].value);
      let imc = peso / estatura * 100;

      this.toastr.success('Resultado', `Su IMC es de: ${imc}`)
    }

    ocultarPeso() {
      this.mostrarPeso = !this.mostrarPeso;
    }

  }
