import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrada } from '../interfaces/entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  constructor(private http: HttpClient) { }

  getEntradas(){
    return this.http.get<Entrada[]>('assets/data/entradas.json');
  }
}