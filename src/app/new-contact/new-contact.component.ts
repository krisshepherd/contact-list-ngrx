import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app-state.model';
import { addContact } from '../store/contact-book.actions';
import { Contact, EMPTYCONTACT } from '../store/contact.model';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {

  contact: Contact = EMPTYCONTACT;

  constructor(private store: Store<AppState>) { }

  addContact(contact: Contact){
    this.store.dispatch(addContact({contact}))
  }

}
