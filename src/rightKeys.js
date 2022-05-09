export function rightKey() {

    let keyboards = document.querySelector('.keyboards');
    let rightKeys = document.createElement('div');
    let backspace = document.createElement('div');
    let enter = document.createElement('div');
    let rightShift = document.createElement('div');
    let up = document.createElement('div');

    rightKeys.className = "right_keys";

    enter.className = "enter";
    rightShift.className = "right_shift";
    up.className = "up";
    backspace.className = "back";

        // div.innerHTML = result;

        rightKeys.append(backspace);
        rightKeys.append(enter);
        rightKeys.append(rightShift);
        rightKeys.append(up);

    keyboards.prepend(rightKeys);





}