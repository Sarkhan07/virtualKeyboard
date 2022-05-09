export function rightKey() {

    let keyboards = document.querySelector('.keyboards');
    let rightKeys = document.createElement('div');
    let backspace = document.createElement('div');
    let enter = document.createElement('div');

    

    rightKeys.className = "right_keys";

    enter.className = "enter";

    backspace.className = "back";

        // div.innerHTML = result;

        rightKeys.append(backspace);
        rightKeys.append(enter);
       


    keyboards.prepend(rightKeys);





}