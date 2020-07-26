import { Notes } from './../../interface/notes/notes';
import { NotesService } from './../../service/notes/notes.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.scss'],
})
export class AddnotesComponent implements OnInit {
  constructor(private service: NotesService) {}

  ngOnInit(): void {
    this.editnote = this.service.getedit();
  }
  editnote:Notes[]=[]
  submit(f: NgForm) {

    console.log(f.value.notetype);

    this.service.setnotes({
      notetype: f.value.notetext,
      noteopertaion: f.value.notetype,
      notestest: f.value.operation,
      importance: f.value.check,
    });
  }
}
