var app = document.getElementById('app');
var single = document.getElementById('single')

var noteList = new NoteList();
noteList.addNote("Spencer");
noteList.addNote("Dom");
noteList.addNote("George");
noteList.addNote("Dave");

var noteController = new NoteController(noteList);
noteController.updateHtml(app);

var singleNoteView = new SingleNoteView(noteList.list[3]);

noteController.updateSingle(single);
