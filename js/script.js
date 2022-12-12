// document.addEventListener("DOMContentLoaded", 
// 	function (event){

// function sayHello(event) {
// 	console.log(this);
// 	var name = document.getElementById("name").value;
// 	var message = "<h1>Привет, " + name + "</h1>";
// 	document.getElementById("content")
// 	.innerHTML = message;

// }


// //Unobtrusive event binding
// //document.querySelector("button").addEventListener("click", sayHello);

// //changing properties in JS
// document.querySelector("button").onclick = sayHello;

// 	}

// );

//AJAX

document.addEventListener("DOMContentLoaded",
	function(event){
		document.querySelector("button").addEventListener("click", function(){

			//Call server to get the name
			$ajaxUtils.sendGetRequest("/data/name.txt",
				function(request){
					document.querySelector('#content').innerHTML = "<h2 style = color:#009000;>Hello, " + request.responseText + '!</h2>';
				});
			
		});
	}

);

