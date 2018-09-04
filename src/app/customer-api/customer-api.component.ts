import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CustomerServiceService } from '../services/customer-service.service';
import { Customer } from '../services/customer-service.service';

@Component({
  selector: 'app-customer-api',
  templateUrl: './customer-api.component.html',
  styleUrls: ['./customer-api.component.scss']
})
export class CustomerApiComponent implements OnInit {

  customers: Customer[];
  customer: Customer;
  customerToAdd: Customer;

  constructor(private customerService: CustomerServiceService) {

  }

  ngOnInit() {
    this.customerToAdd = new Customer();
    this.customerToAdd.Id = 0;
    this.customerToAdd.Firstname = "<<firstname>>";
    this.customerToAdd.Lastname = "<<lastname>>";
    
    this.getCustomer();
    this.getCustomers();
  }

  getCustomer() {
    // Get one customer data.
    this.customerService.getCustomer(101)
      .subscribe(c => {
        this.customer = c;
        console.log(this.customer);
      });
  }

  getCustomers() {
    this.customerService.getCustomers()
      .subscribe(c => {
        console.log(c);
        this.customers = c;
        console.log(this.customers);
      });
  }

  addCustomer() {
    // alert(this.customerToAdd.Id);
    // alert(this.customerToAdd.Firstname);
    // alert(this.customerToAdd.Lastname);
    this.customerService.addCustomer(this.customerToAdd)
      .subscribe(res => {
        this.getCustomers();
        alert('Customer added successfully!');
      }),
      err => {
        console.log("Error occurred: " + err);
      };
    }

  updateCustomer() {
    this.customerService.editCustomer(this.customer)
      .subscribe(res => {
        this.getCustomers();
        alert("Customer data Updated successfully !!")
      });
  }

  deleteCustomer(id) {
    //alert('Deleting Customer with id: ' + id);
    this.customerService.deleteCustomer(id)
      .subscribe(res => {
        this.getCustomers();
        alert(`Customer with Id ${id}  Deleted successfully !!`)
      });
  }
}
