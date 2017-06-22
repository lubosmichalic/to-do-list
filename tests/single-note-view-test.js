function testSingleNoteView() {
  console.log("hello")
  var note = "String";
  var singleNote = new SingleNoteView(note);
  assert.isEqual(singleNote.printHTML(), "<div>String</div>");
};

testSingleNoteView();
