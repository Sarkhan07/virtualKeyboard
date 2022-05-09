


export function bottomKey() {

    let keyboards = document.querySelector('.keyboards');
    let bottomKeys = document.createElement('div');
    let ctrl = document.createElement('div');
    let win = document.createElement('div');
    let alt = document.createElement('div');
    let space = document.createElement('div');
    let rightAlt = document.createElement('div');
    let rightCtrl = document.createElement('div');
    let left = document.createElement('div');
    let down = document.createElement('div');
    let right = document.createElement('div');


    bottomKeys.className = "bottom_keys";
    ctrl.className = "ctrl";
    win.className = "win";
    alt.className = "alt";
    space.className = "space";
    rightAlt.className = "right_alt";
    rightCtrl.className = "right_ctrl";
    left.className = "left";
    down.className = "down";
    right.className = "right";

        // div.innerHTML = result;

       
        bottomKeys.append(ctrl);
        bottomKeys.append(win);
        bottomKeys.append(alt);
        bottomKeys.append(space);
        bottomKeys.append(rightAlt);
        bottomKeys.append(rightCtrl);
        bottomKeys.append(left);
        bottomKeys.append(down);
        bottomKeys.append(right);

    keyboards.prepend(bottomKeys);

    document.querySelector('[data="32"]').style.left = "-556px"; 

    document.querySelector('[data="32"]').style.top = "85px"; 
    document.querySelector('[data="32"]').style.width = "450px"; 





};