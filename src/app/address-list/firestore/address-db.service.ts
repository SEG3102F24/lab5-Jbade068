import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, deleteDoc, setDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AddressEntry } from '../address-entry'; // import your AddressEntry model

@Injectable({
  providedIn: 'root'
})
export class AddressDbService {
  constructor(private firestore: Firestore) {}

  getAddresses(): Observable<AddressEntry[]> {
    const addressesCollection = collection(this.firestore, 'addresses');
    return collectionData(addressesCollection, { idField: 'id' }) as Observable<AddressEntry[]>;
  }

  createAddress(address: AddressEntry) {
    const addressesCollection = collection(this.firestore, 'addresses');
    return addDoc(addressesCollection, address);
  }

  updateAddress(address: AddressEntry) {
    const addressDoc = doc(this.firestore, `addresses/${address.id}`);
    return setDoc(addressDoc, address);
  }

  deleteAddress(id: string) {
    const addressDoc = doc(this.firestore, `addresses/${id}`);
    return deleteDoc(addressDoc);
  }
}
