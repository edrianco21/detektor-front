import { Component, OnInit, Input } from '@angular/core';
import { Propietario } from '../models/propietario';
import { PropietarioService } from '../services/propietario.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrls: ['./list-vehiculo.component.css']
})
export class ListVehiculoComponent implements OnInit {

  @Input()
  propietario: Propietario;

  vehiculos: any[] = []

  register: boolean = false;

  vehiculoForm: FormGroup = this.fb.group({
    placa: [null, Validators.required],
    marca: [null, Validators.required],
    linea: [null, Validators.required],
    cilindrada: [null, Validators.required],
    color: [null, Validators.required],
    chasis: [null, Validators.required],
    tipo: [null, Validators.required],
    modelo: [null, Validators.required],
    propietario: [null, Validators.required]
  })

  vehciulos = []
  error: string = ""

  constructor(
    private fb: FormBuilder,
    private _propietarioService: PropietarioService
  ) { }

  ngOnInit(): void {
    this.getVehiculosByPropietario();
  }

  getVehiculosByPropietario() {
    this.register = false;
    this._propietarioService.getVehiculosByPropietario(this.propietario.propietarioId).subscribe(
      (res: any) => {
        this.vehiculos = res;
      },
      err => {
        console.log(err)
      }
    );
  }

  registerVehiculo() {
    this.error = ""
    this.vehiculoForm.get('propietario').setValue(this.propietario);
    if (!this.vehiculoForm.valid) {
      this.error = 'Complete los campos requeridos'
      return
    }
    this._propietarioService.insertVehiculo(this.vehiculoForm.value).subscribe(
      res => {
        this.vehiculoForm.reset();
        this.getVehiculosByPropietario();
      },
      err => {
        console.log(err)
      }
    );
  }

  deleteVehiculo(row: any) {
    try {
      this._propietarioService.deleteVehiculo(row).subscribe(res => {
        this.getVehiculosByPropietario();
      }, err => {
        this.getVehiculosByPropietario();
      })
    } catch (error) {
      this.getVehiculosByPropietario();
    }
  }
}
