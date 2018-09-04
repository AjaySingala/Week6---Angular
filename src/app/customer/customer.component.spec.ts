import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { getOrCreateTemplateRef } from '../../../node_modules/@angular/core/src/render3/di';
import { Customer } from '../services/customer-service.service';
import { CustomerModel } from '../customer-model';

// describe('CustomerComponent', () => {
//   let component: CustomerComponent;
//   let fixture: ComponentFixture<CustomerComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CustomerComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CustomerComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Hello there!', () => {
  it('greet hello', () => {
    let custComponent = new CustomerComponent();
    expect(custComponent.greet())
      .toEqual('Hello there!');
  })
});

describe('Get First Customer', () => {
  it('Get First Customer', () => {
    let custComponent = new CustomerComponent();
    custComponent.ngOnInit();
    expect(custComponent.customers[0].firstName)
      .toEqual('first');
  })
});

describe('Create a new Customer', () => {
  it('Create a new Customer', () => {
    let custComponent = new CustomerComponent();
    let aCustomer = new CustomerModel("Test Firstname", "Test Lastname");
    custComponent.create(aCustomer);
    let count = custComponent.customers.length;
    expect(custComponent.customers[count - 1].firstName)
      .toEqual('Test Firstname');
  })
});

describe('Run Tests Together', () => {
  let custComponent: CustomerComponent;

  beforeEach(() => {
    custComponent = new CustomerComponent();
  });

  afterEach(() => {
    custComponent = null;
  });

  it('2gether: greet hello', () => {
    //let custComponent = new CustomerComponent();
    expect(custComponent.greet())
      .toEqual('Hello there!');
  });

  it('2gether: Get First Customer', () => {
    //let custComponent = new CustomerComponent();
    custComponent.ngOnInit();
    expect(custComponent.customers[0].firstName)
      .toEqual('first');
  });  
});