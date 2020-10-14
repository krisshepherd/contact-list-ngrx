import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { addContact } from '../store/contact-book.actions';
import { EMPTYCONTACT } from '../store/contact.model';
import { CONTACTS } from '../store/mock-contacts';

import { NewContactComponent } from './new-contact.component';

describe('NewContactComponent', () => {
  let component: NewContactComponent;
  let fixture: ComponentFixture<NewContactComponent>;
  let store: MockStore;
  let initialState = { contacts: CONTACTS }

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ NewContactComponent ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents()
    .then(()=> {
      fixture = TestBed.createComponent(NewContactComponent);
      component = fixture.componentInstance;
    });

    store = TestBed.inject(MockStore);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with an empty contact', ()=> {
    expect(component.contact).toBe(EMPTYCONTACT, "Unexpected initial value for contact");
  });

  it('should dispatch an addContact action', ()=> {
    const contact = CONTACTS[0];
    store.scannedActions$.subscribe( action => {
      //skipping init action
      if(action.type !== '@ngrx/store/init'){
        expect(action.type).toBe(addContact.type, "Unexpected action type");
        expect(action['contact']).toBe(contact, "Unexpected action payload");
      }
    });
    component.addContact(contact);
  });

});
