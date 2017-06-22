function testSingleNoteView() {
  console.log("hello")
  var note = new Note("String");
  var singleNote = new SingleNoteView(note);
  assert.isEqual(singleNote.printHTML(), "<div>String</div>");
};

testSingleNoteView();
