import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_CONFIG.serviceUrl}/clientes`);
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_CONFIG.serviceUrl}/clientes/${id}`);
  }

  insert(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_CONFIG.serviceUrl}/clientes`, cliente);
  }

  remove(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${API_CONFIG.serviceUrl}/clientes/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${API_CONFIG.serviceUrl}/clientes/${cliente.id}`, cliente);
  }
}
