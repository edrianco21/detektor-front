import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PropietarioService } from '../services/propietario.service';

@Component({
  selector: 'app-register-propietario',
  templateUrl: './register-propietario.component.html',
  styleUrls: ['./register-propietario.component.css']
})
export class RegisterPropietarioComponent implements OnInit {

  @Output() setPropietario = new EventEmitter()

  error = ""

  propietarioForm: FormGroup = this.fb.group({
    email: [null, Validators.required],
    phone: [null, Validators.required],
    address: [null, Validators.required],
    document: [null, Validators.required],
    name: [null, Validators.required],
    lastName: [null, Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private _propietarioService: PropietarioService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.error = ""
    if (!this.propietarioForm.valid) {
      this.error = 'Complete los campos requeridos'
      return
    }
    this._propietarioService.insertPropietario(this.propietarioForm.value).subscribe(
      res => {
        this.setPropietario.emit(res)
      },
      err => {
        console.log(err)
      }
    );
  }
}
