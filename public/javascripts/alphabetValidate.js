
$(document).ready(function(){
    $("#fullname").keypress(function(event){
    	console.log('key typed');
        var inputValue = event.charCode;
        if(!(inputValue >= 65 && inputValue <= 90)
        && !(inputValue >= 97 && inputValue <=122)
        && (inputValue != 32 && inputValue != 0)){
            event.preventDefault();
        }
    });
});

$(document).ready(function(){
    $("#class").keypress(function(event){
    	console.log('key typed');
        var inputValue = event.charCode;
        if(!(inputValue >= 48 && inputValue <= 57)
        && (inputValue = 32 && inputValue != 0)){
            event.preventDefault();
        }
    });
});

$(document).ready(function(){
    $("#school").keypress(function(event){
    	console.log('key typed');
        var inputValue = event.charCode;
        if(!(inputValue >= 65 && inputValue <= 90)
        && !(inputValue >= 97 && inputValue <=122)
        && (inputValue != 32 && inputValue != 0)){
            event.preventDefault();
        }
    });
});

$(document).ready(function(){
    $("#dob").keypress(function(event){
        console.log('key typed');
        var inputValue = event.charCode;
        if(!(inputValue >= 48 && inputValue <= 57)
        && !(inputValue == 45)
        && (inputValue != 32 && inputValue != 0)){
            event.preventDefault();
        }
    });
});


// Create a request variable and assign a new XMLHttpRequest object to it.

var request = new XMLHttpRequest()

 function test(){

	var reqObj = {
		name: document.getElementsByName('name')[0].value,
		rollno : document.getElementsByName('rollno')[0].value,
		class: document.getElementsByName('class')[0].value,
		school: document.getElementsByName('school')[0].value,
		dob: document.getElementsByName('dob')[0].value
	}

	request.open('POST', 'http://localhost:3000/api/student', true);

	request.setRequestHeader('Content-type', 'application/json');

	request.onload = function() {
		  var data = JSON.parse(this.response)

		  if (request.status == 200 && !!data.status) {
		  	console.log('success api response');
		  	document.getElementById('view').innerHTML = data.message
		  } else {
		  	console.log('error api response');
		  	document.getElementById('view').innerHTML = data.message;
		  }
	}

	request.send(JSON.stringify(reqObj));
	
}


