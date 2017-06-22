(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.updateHtml = function(element) {
    element.innerHTML = this.noteListView.HTMLView();
  }

  exports.NoteController = NoteController;
})(this)
