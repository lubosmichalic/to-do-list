function testNoteHasText() {
  console.log('testNoteHasText')
  var note = new Note("Hello World!");
  assert.isTrue(note.text === "Hello World!");
};


function testNoteCheckTextMethod() {
  console.log('testNoteCheckTextMethod')
  var note = new Note("Hello again!");
  assert.isEqual(note.checkText(), "Hello again!");
};


testNoteHasText()
testNoteCheckTextMethod();
