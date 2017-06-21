(function(exports) {
  var NoteList = function () {
    this.list = [];
  };

NoteList.prototype.returnNotes = function () {
  return this.list
};

NoteList.prototype.addNote = function (string) {
    this.list.push(string);
    return this.list
};

  exports.NoteList = NoteList;

})(this)
