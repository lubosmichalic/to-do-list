(function(exports){

  function Note(text) {
    this.text = text;
  };

  Note.prototype.checkText = function () {
    return this.text;
  };

  exports.Note = Note;

})(this);
