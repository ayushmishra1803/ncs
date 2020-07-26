import { NotesService } from './../../service/notes/notes.service';
import { Notes } from './../../interface/notes/notes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor(private service:NotesService) { }
  notes:Notes[]=[]

  ngOnInit(): void {
    this.
  }

}
