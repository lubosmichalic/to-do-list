var app = document.getElementById('app');

var noteList = new NoteList();
noteList.addNote("Spencer");

var noteController = new NoteController(noteList);
noteController.updateHtml(app);
