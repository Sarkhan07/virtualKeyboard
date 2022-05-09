const allKeys = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47];
const littles = ["q", 'w', "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\/", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
const little = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];




export function mainKeyBoards() {
	let result = '';
	for (let i = 0; i < allKeys.length; i++) {
		if (i == 13 ) {
			result += '<div class="remove"></div>';
		} else if (i == 24) {
			result += '<div class="remove"></div>';
		} 
		else if (i == 25) {
			result += '<p class = "p">/</p>';
		} 
		result +=  '<div class="numKeys" title="' + littles[i] + '" data="' + little[i] + '" >'+ String.fromCharCode(allKeys[i]) + '</div>';
	}


	let keyboards = document.createElement('div');
	


	keyboards.className = "keyboards";
	keyboards.innerHTML = result;

	document.body.append(keyboards);

	//textarea

	let div = document.createElement('div');
	div.className = "txtarea";
	keyboards.before(div);

	div.innerHTML = '<textarea id="txt" name="txt" rows="4" cols="50">';
	let txtAreaValue = 

	
	//

	//keypress

	keyboards.onkeypress = function (event) {
		console.log( event.key);
		document.querySelectorAll('.keyboards .keys').forEach(function(element) {
			element.classList.remove('active');
		});
		document.querySelector('.keyboards .keys[data="' + event.keyCode + '"]').classList.add('active');
		
	};

	// onclick

	document.querySelectorAll('.keyboards .keys').forEach(function(element) {
		    element.onclick = function (event) {
		        document.querySelectorAll('.keyboards .keys').forEach(function(element) {
		            element.classList.remove('active');
		        });
		
		        let code = this.getAttribute("title");
		        this.classList.add('active');

		        console.log(code);

				document.getElementById('txt').value += code;

				// textAreaValue.value = code;
				
		    }		
		
		});

	};






	// const allKeys = [];
	// document.onkeypress = function(event) {
	// 	allKeys.push(event.charCode);
	// 	console.log(allKeys)
	// }
	