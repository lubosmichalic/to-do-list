function testHTMLView() {
  console.log('testHTMLView')
  var noteList = new NoteList();
  var view = new NoteListView(noteList);


  view.noteList.addNote("Note1");
  assert.isEqual(view.HTMLView(), "<ul><li><div>Note1</div></li></ul>")
};

testHTMLView();
