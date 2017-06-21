function testHTMLView() {
  console.log('testHTMLView')
  var view = new NoteListView();

  view.noteList.addNote("Note1");
  assert.isEqual(view.HTMLView(), "<ul><li><div>Note1</div></li></ul>")
};

testHTMLView();
