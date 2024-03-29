import { ConsultaListaExamenDTO } from './../_model/consultaListaExamenDTO';
import { HttpClient } from '@angular/common/http';
import { Examen } from './../_model/examen';
import { Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  examenesCambio = new Subject<Examen[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST_URL}/examenes`;
  //url: string = `${environment.HOST_URL}/${environment.MICRO_CRUD}/examenes`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Examen[]>(this.url);
  }

  listarExamenPorId(id: number) {
    return this.http.get<Examen>(`${this.url}/${id}`);
  }

  registrar(examen: Examen) {
    return this.http.post(this.url, examen);
  }

  modificar(examen: Examen) {
    return this.http.put(this.url, examen);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listarExamenPorConsulta(idConsulta: number){
    return this.http.get<ConsultaListaExamenDTO[]>(`${environment.HOST_URL}/consultaexamenes/${idConsulta}`);
  }
}
