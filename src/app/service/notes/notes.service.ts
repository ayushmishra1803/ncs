import { Notes } from './../../interface/notes/notes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
 private enteredNotes:Notes[]=[]

  constructor() { }
  setnotes(note:Notes){
    this.enteredNotes.push(note);
    console.log(this.enteredNotes);
    console.log(note);


  }
  get(){
    return [...this.enteredNotes]
  }
}
