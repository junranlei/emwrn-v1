// set the main content to full width
$(".BodyText").css("width","100%");

// TRANSCRIPTION CONCERTINA

// see http://www.adp-gmbh.ch/web/js/hiding_column.html
// see http://www.javascriptkit.com/domref/tableproperties.shtml
function show_hide_column(cb, table_id, col_no) {
    var stl;
    if (cb.checked == true) {
    	stl = '';
    }
    else {
    	stl = 'none';
    }
    var rows = document.getElementById(table_id).rows;
    for (var row=0; row<rows.length;row++) {
        rows[row].cells[col_no].style.display=stl;
    }
}
function show_hide_element(cb, element_class) {
    var stl;
    if (cb.checked == true) {
    	stl = '';
    }
    else {
    	stl = 'none';
    }
    var es = document.getElementsByClassName(element_class);
    for (var i=0; i<es.length;i++) {
        es[i].style.display=stl;
    }
}
