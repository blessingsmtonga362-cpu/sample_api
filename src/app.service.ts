import { Injectable, Get, Post } from '@nestjs/common';

@Injectable()
export class AppService {
  private notes = [
    { id: 1, title: 'bimto' },

    {
      id: 3,
      title: 'ronnie',
    },
    {
      id: 4,
      title: 'gilford',
    },
    { id: 5, title: 'brian' },
  ];

  getNotes() {
    return this.notes;
  }
  createNote(body: any) {
    const newNote = {
      id: this.notes.length + 1,
      title: body.title,
    };
    this.notes.push(newNote);
    return newNote;
  }
}
