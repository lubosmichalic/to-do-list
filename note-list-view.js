NoteListView = function () {
  this.noteList = new NoteList();
}

NoteListView.prototype.HTMLView = function () {
  var string = "<ul>";
  for (var i = 0; i < this.noteList.list.length; i++) {
    string += "<li><div>" + this.noteList.list +"</div></li>"
  }
  return string + "</ul>"
};
