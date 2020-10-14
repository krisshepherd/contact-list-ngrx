import { createReducer, on } from "@ngrx/store"
import { Contact } from "./contact.model"
import { addContact } from "./contact-book.actions"
import { CONTACTS } from './mock-contacts';

export const initialState: Array<Contact> = CONTACTS;

export const contactBookReducer = createReducer(initialState,
    on(addContact, (state, action) => state.concat(action.contact))
)