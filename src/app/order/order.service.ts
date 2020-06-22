import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
    uri = '/api/order';

    constructor(private httpClient: HttpClient) {}

    list() {
        return this.httpClient.get(`${environment.url}${this.uri}`);
    }

    get(id: number) {
        return this.httpClient.get(`${environment.url}${this.uri}/${id}`);
    }

    save(value: any) {
        return this.httpClient.post(`${environment.url}${this.uri}`, value);
    }
    
    update(id: number, value: any) {
        return this.httpClient.put(`${environment.url}${this.uri}/${id}`, value);
    }

    delete(id: number) {
        return this.httpClient.delete(`${environment.url}${this.uri}/${id}`);
    }
}