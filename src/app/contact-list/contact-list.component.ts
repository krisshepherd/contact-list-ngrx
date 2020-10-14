import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../store/app-state.model';
import { Contact } from '../store/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts$: Observable<Array<Contact>>;
  selectedContact: Contact;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.contacts$ = this.store.select('contacts')
  }

  showContact(contact: Contact): void {
    this.selectedContact = contact;
  }
}
