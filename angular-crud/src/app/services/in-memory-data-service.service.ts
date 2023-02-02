import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ContactDetails } from '../dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let contact = [
      new ContactDetails(1, "Alan", "+593848521450", "alan@gmail.com"),
      new ContactDetails(2, "Jennifer","+593999905556", "jenny@gmail.com"),
      new ContactDetails(3, "John", "+593234335458", "John@gmail.com"),
      new ContactDetails(4, "Juan", "+593860385214", "juan@gmail.com")
    ];
    return {contact};
  }


  genId(contact: ContactDetails[]): number {
    return contact.length > 0 ? Math.max(...contact.map(hero => hero.id)) + 1 : 4;
  }
}
