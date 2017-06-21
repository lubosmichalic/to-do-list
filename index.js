var app = document.getElementById('app');

var noteList = new NoteList();
noteList.addNote("Spencer");

var notelistView = new NoteListView();
noteListView.HTMLView(app)
