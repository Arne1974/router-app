import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import contactsRoutes from './contacts.routes';
import { ContactsComponent } from './contacts.component';


@NgModule({
    imports: [CommonModule, contactsRoutes],
    declarations: [ContactsComponent]
})
export default class ContactsModule { }
