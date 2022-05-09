const Nums = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
const Num = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="];
const Symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

export function numKeyBoards() {
	let result = '';
    let sym = '';

        for (let i = 0; i < Nums.length; i++) {
            
            result +=  '<div class="numKeys" title="' + Num[i] + '" " " data="' + Nums[i] + '" >'+ String.fromCharCode(Nums[i]) + '</div>';
            if (i == 12 ) {
                result += '<div class="remove"></div>';
            } 


        }

        for (let i = 0; i < Symbols.length; i++) {
            sym +=  '<div class="numKey" >'+ Symbols[i] + '</div>';

            


        }

        let keyboards = document.querySelector ('.keyboards');
        let div = document.createElement('div');

            div.className = "numkeyboards";
            div.innerHTML = result;

            let divs = document.createElement('div');

            divs.className = "symkeyboard";
            divs.innerHTML = sym;

        keyboards.prepend(div);
        
        div.prepend(divs);

        


        document.onkeypress = function (event) {
            console.log( event.key);
            document.querySelectorAll('.keyboards .numKeys').forEach(function(element) {
                element.classList.remove('active');
            });

            document.querySelector('.keyboards .numKeys[data="' + event.keyCode + '"]').classList.add('active');
        }

     // onclick

	document.querySelectorAll('.keyboards .numKeys').forEach(function(element) {
        element.onclick = function (event) {
            document.querySelectorAll('.keyboards .numKeys').forEach(function(element) {
                element.classList.remove('active');
            });
    
            let code = this.getAttribute("title");
            this.classList.add('active');

            console.log(code);
            document.getElementById('txt').value += code;

            
            
        }		
    
    });


        // document.querySelectorAll('.keyboards .numKeys').forEach(function(element) {
        //     element.onclick = function (event) {
        //         document.querySelectorAll('.keyboards .numKeys').forEach(function(element) {
        //             element.classList.remove('active');
        //         });
        
        //         let code = this.getAttribute('title');
        //         this.classList.add('active');
        //         console.log(code);
        //     }
        
        
        // });

};



// echo "# keyboard" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M master
// git remote add origin https://github.com/Sarkhan07/keyboard.git
// git push -u origin master
// git branch --set-upstream-to=origin/<branch> keys



// const Nums = [];
// document.onkeypress = function(event) {
// 	Nums.push(event.charCode);
// 	console.log(Nums)
// }


