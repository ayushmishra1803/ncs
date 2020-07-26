import { NotesService } from './../../service/notes/notes.service';
import { Notes } from './../../interface/notes/notes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent implements OnInit {
  constructor(private service: NotesService) {}
  notes: Notes[] = [];

  getarray(){
 this.notes = this.service.get();
  }

  ngOnInit(): void {
   this.getarray();
  }
  delete(note: Notes[]) {
    console.log(note);
    this.service.delete(note)
    this.getarray();
  }

  edit(note: Notes[]) {
    console.log(note);
  }
}
