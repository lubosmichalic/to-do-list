var app = document.getElementById('app');

var noteList = new NoteList();
noteList.addNote("Spencer");
noteList.addNote("Dom");
noteList.addNote("George");
noteList.addNote("Dave");

var noteController = new NoteController(noteList);
noteController.updateHtml(app);
