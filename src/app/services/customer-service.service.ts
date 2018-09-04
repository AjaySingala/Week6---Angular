import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';

//import {Customer} from './customer-service.service';

@Injectable()
export class CustomerServiceService {

  url: string = "http://localhost:57881/api/CustomersNew";

  customers: Observable<Customer[]>;
  customer: Observable<Customer>;

  constructor(private client: HttpClient) {

  }

  getCustomer(id) {
    var newUrl = this.url + `/${id}`;
    var customer = this.client.get<Customer>(newUrl);
    return customer;

  }

  getCustomers() {
    return this.client.get<Customer[]>(this.url);
  }

  addCustomer(newCustomer: Customer) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Firstname: newCustomer.Firstname,
      Lastname: newCustomer.Lastname,
      Id: newCustomer.Id
    };
    //alert(newCustomer.Firstname);
    return this.client.post<Customer>(this.url, body, {
      headers
    });
  }

  editCustomer(editCustomer: Customer) {
    //const params = new HttpParams().set('Id', editCustomer.Id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Firstname: editCustomer.Firstname,
      Lastname: editCustomer.Lastname,
      Id: editCustomer.Id
    };
    return this.client.put<Customer>(this.url + '/' + editCustomer.Id, body, {
      headers
    });
  }

  deleteCustomer(id: number) {
    //alert(`Deleting customer with id: ${id} in service.`);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.client.delete(this.url + '/' + id);
  }
}

export class Customer {
  Id: number;
  Firstname: string;
  Lastname: string;
}
