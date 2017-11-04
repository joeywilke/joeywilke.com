 $(document).ready(function () {


    $('.textInput').keyup(function (event) {
        var obj = $(this);
        var curid = $(this).attr('id');
        var endid = curid.substring(5);
        var inputval = document.getElementById(curid).value;
        $('#' + endid ).text(inputval);
        var str1 = document.getElementById("Line1").textContent;
        var str2 = document.getElementById("Line2").textContent;
        var str3 = document.getElementById("Line3").textContent;
        var totalstring = str1.concat(str2,str3);
        var charCount = totalstring.length;
        $('#count').text(charCount);

        // if ((event.keyCode ? event.keyCode : event.which) === 13) {
            
        // }
        
        
    }); ;

    $('#textSize2').change(function() {
    	var curVal = $(this).val();
    	var textChange = document.getElementById("Line2");
    	if (curVal === "a") {
    		textChange.style.fontSize = '25px';
    	}
    	if (curVal === "b") {
    		textChange.style.fontSize = '22px';
    	}
	  // alert('The option with value ' + $(this).val() + ' and text ' + $(this).text() + ' was selected.');
	});

    $('#textSize3').change(function() {
    	var curVal = $(this).val();
    	var textChange = document.getElementById("Line3");
    	if (curVal === "a") {
    		textChange.style.fontSize = '25px';
    	}
    	if (curVal === "b") {
    		textChange.style.fontSize = '22px';
    	}
	  // alert('The option with value ' + $(this).val() + ' and text ' + $(this).text() + ' was selected.');
	});

    // $('.textInput').change(function (event) {
    //     var obj = $(this);
    //     $('#result').text('Input text has been changed:' + obj.val());
    // }); ;

});

// window.onload = function() {
// 	var eSelect = document.getElementById('textSize2');
// 	var textChange = document.getElementById('Line2');
// 	eSelect.onchange = function() {
// 	    if(eSelect.value === "a") {
// 	        textChange.style.fontSize = '25px';
// 	    } 
// 	    if(eSelect.value === "b") {
// 	        textChange.style.fontSize = '22px';
// 	    } 
// 	 }
// }


