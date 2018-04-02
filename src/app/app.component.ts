import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouterApp';
  navs = [
    {url: '', context: 'Home'},
    {url: 'dashboard', context: 'Dashboard'},
    {url: 'dash', context: 'Dash'},
    {url: 'contacts', context: 'Contacts'},
    {url: 'contacts/1', context: 'Contact One'},
  ];
}
