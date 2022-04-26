import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

/**
* @autor Adrian Avendano Concha
* @date 20/01/2022
*/
@Injectable({
    providedIn: 'root'
})
export class PropietarioService {
    constructor(private httpClient: HttpClient) { }

    /**
    * @autor Adrian Avendano Concha
    * @date 19/04/2022
    */
    insertPropietario(propietario: any) {
        return this.httpClient.post('http://localhost:8080/api/propietarios', propietario);
    }

    /**
    * @autor Adrian Avendano Concha
    * @date 19/04/2022
    */
    getVehiculosByPropietario(propietario: number) {
        return this.httpClient.get(`http://localhost:8080/api/vehiculos/propietario/${propietario}`);
    }

    /**
    * @autor Adrian Avendano Concha
    * @date 19/04/2022
    */
    insertVehiculo(vehiculo: any) {
        return this.httpClient.post('http://localhost:8080/api/vehiculos', vehiculo);
    }

    /**
    * @autor Adrian Avendano Concha
    * @date 19/04/2022
    */
    deleteVehiculo(vehiculo: any) {
        return this.httpClient.delete(`http://localhost:8080/api/vehiculos/${vehiculo}`);
    }

}