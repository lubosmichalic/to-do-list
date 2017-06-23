function testNoteControllerCanBeInstantiated() {
  var noteController = new NoteController("fakeNoteList");
  assert.isTrue(noteController.noteList === "fakeNoteList");
}

function testNoteControllerUpdatesInnerHTML() {

  function AppDouble() {
    this.innerHTML = null
  }

  var appDouble = new AppDouble();
  var noteList = new NoteList();
  noteList.addNote("Fav drink: seltzer")
  var noteController = new NoteController(noteList);
  noteController.updateHtml(appDouble);
  assert.isTrue(appDouble.innerHTML === "<ul><li><div>Fav drink: seltzer</div></li></ul>")
}

function testNoteControllerUpdatesInnerHTMLWithAStringLongerThan20Chars() {
console.log('testNoteControllerUpdatesInnerHTMLWithAStringLongerThan20Chars')
  function AppDouble() {
    this.innerHTML = null
  }

  var appDouble = new AppDouble();
  var noteList = new NoteList();
  noteList.addNote("My absolute favourite drink: seltzer")
  var noteController = new NoteController(noteList);
  noteController.updateHtml(appDouble);
  assert.isTrue(appDouble.innerHTML === "<ul><li><div>My absolute favourit...</div></li></ul>")
}
testNoteControllerCanBeInstantiated();
testNoteControllerUpdatesInnerHTML();
testNoteControllerUpdatesInnerHTMLWithAStringLongerThan20Chars();
