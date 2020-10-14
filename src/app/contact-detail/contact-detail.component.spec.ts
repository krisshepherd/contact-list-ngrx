import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CONTACTS } from '../store/mock-contacts';

import { ContactDetailComponent } from './contact-detail.component';

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;
  let contact = CONTACTS[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailComponent ]
    })
    .compileComponents()
    .then(()=> {
      fixture = TestBed.createComponent(ContactDetailComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
    component.contact = contact;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display the first name of the contact', ()=> {
    component.contact = contact;
    fixture.detectChanges();
    const firstname = fixture.debugElement.query(By.css("p:first-child")).nativeElement;
    expect(firstname.innerHTML).toBe("First Name: " + contact.firstname, 'Unexpected first name value');
  });

});
