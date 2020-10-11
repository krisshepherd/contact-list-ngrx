import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { CONTACTS } from './mock-contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts = CONTACTS;
  selectedContact: Contact;

  constructor() { }

  ngOnInit(): void {
  }

  showContact(contact: Contact): void {
    this.selectedContact = contact;
  }
}
