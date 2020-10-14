import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CONTACTS } from '../store/mock-contacts';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let store: MockStore;
  let initialState = { contacts: CONTACTS };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListComponent],
      providers: [
        provideMockStore({initialState})
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactListComponent);
        component = fixture.componentInstance;
      });

      store = TestBed.inject(MockStore);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display contact details until selected', ()=> {
    expect(component.selectedContact).toBeUndefined('Expected no selected contact');
    expect(fixture.debugElement.query(By.css('app-contact-detail'))).toBeNull('Expected contact details not to be displayed');
  })

  it('should display contact details when selected', ()=> {
    component.selectedContact = CONTACTS[0];
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-contact-detail'))).toBeTruthy('Expected contact details to be displayed');
  })
});
