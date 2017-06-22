(function(exports) {

  function SingleNoteView(note){
    this.note = note;
  }

    SingleNoteView.prototype.printHTML = function() {
      return `<div>${this.note.text}</div>`;
    }


  exports.SingleNoteView = SingleNoteView;
})(this)


NoteController.prototype.updateHtml = function(element) {
  element.innerHTML = this.noteListView.HTMLView();
}
