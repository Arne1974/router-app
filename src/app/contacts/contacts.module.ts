import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import contactsRoutes from './contacts.routes';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from '../contact/contact.component';


@NgModule({
    imports: [CommonModule, contactsRoutes],
    declarations: [ContactsComponent, ContactComponent]
})

export default class ContactsModule { }
