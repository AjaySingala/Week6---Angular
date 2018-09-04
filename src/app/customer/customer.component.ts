import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: CustomerModel;
  customers: CustomerModel[] = [];
  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit() {
    this.customer = new CustomerModel("Firstname", "Lastname");
    this.customers.push(new CustomerModel("first", "one"));
    this.customers.push(new CustomerModel("second", "two"));
  }

  test() {
    this.customer.firstName = 'Ajay';
    this.customer.lastName = 'Singala';
  }

  add() {
    this.customer = new CustomerModel(this.firstName, this.lastName);

    this.customers.push(this.customer);
  }

  
  create(cust: CustomerModel) {
    this.customers.push(cust);
  }

  delete(i) {
    this.customers.splice(i, 1);
  }

  greet() {
    return "Hello there!";
  }
}
