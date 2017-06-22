(function (exports) {
  function NoteListView (noteList) {
    this.noteList = noteList;
}

NoteListView.prototype.HTMLView = function () {
  var string = "<ul>";
  for (var i = 0; i < this.noteList.list.length; i++) {
    string += "<li><div>" + this.noteList.list +"</div></li>"
  }
  return string + "</ul>"
};

exports.NoteListView = NoteListView;

})(this)
