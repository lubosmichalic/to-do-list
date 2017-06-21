function testNoteListContainsArray() {
  console.log('testNoteListContainsArray')
  var noteList = new NoteList();
  // assert.isEqual(noteList.list,[]);
  assert.isTrue(Array.isArray(noteList.list));

};


function testReturnNoteModels() {
  console.log('testReturnNoteModels')
  var noteList = new NoteList();
  var note = "note double"
  var note2 = "note double 2"
  noteList.list.push(note, note2)

  assert.isEqual(noteList.returnNotes(), noteList.list)
}

function testAddNoteToList() {
  console.log('testAddNoteToList')
  var noteList = new NoteList();
  var note = "My new note!"
  noteList.addNote(note);

  assert.isEqual(noteList.list.length, 1);

};

testNoteListContainsArray()
testReturnNoteModels()
testAddNoteToList()
