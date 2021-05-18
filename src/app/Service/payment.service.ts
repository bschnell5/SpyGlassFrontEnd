import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:9081/bks/payments';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  startdate: Date;
  targetdate: Date;
  depositamt: number;
  depositfreq: string;
  monthlyPay: number;
  weeklyPay: number;
  quartlyPayment: number;


  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseURL);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseURL, data);
  }

  update(id,data): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.delete(baseURL);
  }

  findByStatus(status): Observable<any> {
    return this.http.get(`${baseURL}/${status}`);
  }
}

