import { createAction, props } from '@ngrx/store';
import { Contact } from './contact.model';

export const addContact = createAction(
    '[New Contact Component] Add Contact',
    props<{contact: Contact}>()
);

