export interface Contact {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    address: string;
}

export const EMPTYCONTACT: Contact = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: ''
}