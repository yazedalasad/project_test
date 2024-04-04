import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'book_manger',
  templateUrl: './book_manger.html',
  styleUrls: ['./book_manger.css']
})
export class AddBookComponent {

  constructor(private firestore: AngularFirestore) { }

  addBook() {
    const book = {
      title: 'Example Book',
      author: 'John Doe',
      price: 19.99,
      summary: 'This is an example book.'
    };

    this.firestore.collection('books').add(book)
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  }
}