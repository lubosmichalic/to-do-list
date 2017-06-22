(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.updateHtml = function(element) {
    element.innerHTML = this.noteListView.HTMLView();
  }

  NoteController.prototype.updateSingle = function(element) {
    element.innerHTML = singleNoteView.printHTML();
  }
  exports.NoteController = NoteController;
})(this)
