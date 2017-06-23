(function (exports) {
  function NoteListView (noteList) {
    this.noteList = noteList;
}

NoteListView.prototype.HTMLView = function () {
  var string = "<ul>";
  for (var i = 0; i < this.noteList.list.length; i++) {
    if (this.noteList.list[i].length < 20){
      string += "<li><div>" + this.noteList.list[i] +"</div></li>"
  } else {
      string += "<li><div>" + this.noteList.list[i].substring(0,20) + "..." +"</div></li>"
  }}
  return string + "</ul>"
};

exports.NoteListView = NoteListView;

})(this)
