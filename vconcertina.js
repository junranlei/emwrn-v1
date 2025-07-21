// set the main content to full width
			$(".BodyText").css("width","100%");

// TRANSCRIPTION CONCERTINA

function show_hide_column(cb, table_id, col_no) {
    var stl;
    if (cb.checked == true) {
    	stl = ''
    }
    else {
    	stl = 'none';
    }
    var rows = document.getElementById(table_id).rows;
    for (var row=0; row<rows.length;row++) {
        rows[row].cells[col_no].style.display=stl;
    }
}

// Wait till it's all loaded then set default visibility of columns
window.onload = function(e){
	var x=document.getElementById("showhidecontrol");
	var y=x.getElementsByTagName("input");
	var txt = "";
	for (var i=0;i<y.length;i++)
  	{
		show_hide_column(y[i], 'general', i);
  	}
}
