


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
    let up = document.createElement('div');
    let shift = document.createElement('div');
    let rightShift = document.createElement('div');
    let tab = document.createElement('div');
    let caps = document.createElement('div');

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
    up.className = "up";
    shift.className = "shift";
    rightShift.className = "right_shift";
    tab.className = "tab";
    caps.className = "caps";
    

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
        bottomKeys.append(up);
        bottomKeys.prepend(shift);
        bottomKeys.prepend(rightShift);
        bottomKeys.append(tab);
        bottomKeys.append(caps);

    keyboards.prepend(bottomKeys);

    document.querySelector('[data="32"]').style.left = "-556px"; 

    document.querySelector('[data="32"]').style.top = "85px"; 
    document.querySelector('[data="32"]').style.width = "450px"; 

    ctrl.innerHTML = "Ctrl";
    rightCtrl.innerHTML = "Ctrl";
    up.innerHTML = "↑";
    down.innerHTML = "↓";
    left.innerHTML = "←";
    right.innerHTML = "→";
    alt.innerHTML = "Alt";
    rightAlt.innerHTML = "Alt";
    win.innerHTML = "win";
    shift.innerHTML = "Shift";
    rightShift.innerHTML = "Shift";
    tab.innerHTML = "Tab";
    caps.innerHTML = "Caps Lock";
    

    document.onkeydown = function(e) {
        switch(e.keyCode)
        {
          case 38:
            caps.classList.remove('left_active');
            tab.classList.remove('left_active');
            rightAlt.classList.remove("left_active");
            rightShift.classList.remove('left_active');
            shift.classList.remove('left_active');
              win.classList.remove("left_active");
            alt.classList.remove("left_active");
            rightCtrl.classList.remove('left_active');
            left.classList.remove('left_active');
            right.classList.remove('left_active');
            down.classList.remove('left_active');
            up.classList.add('left_active');
            ctrl.classList.remove('left_active');

          break;
          case 40:
            caps.classList.remove('left_active');
            tab.classList.remove('left_active');
            rightAlt.classList.remove("left_active");
            rightShift.classList.remove('left_active');
            shift.classList.remove('left_active');
            win.classList.remove("left_active");
            alt.classList.remove("left_active");
            rightCtrl.classList.remove('left_active');
          down.classList.add('left_active');
          left.classList.remove('left_active');
          right.classList.remove('left_active');
          up.classList.remove('left_active');
          ctrl.classList.remove('left_active');
          break;
          case 37:
            caps.classList.remove('left_active');
            tab.classList.remove('left_active');
            rightAlt.classList.remove("left_active");
            rightShift.classList.remove('left_active');
            shift.classList.remove('left_active');
            win.classList.remove("left_active");
            alt.classList.remove("left_active");
            rightCtrl.classList.remove('left_active');
          left.classList.add('left_active');
          down.classList.remove('left_active');
          right.classList.remove('left_active');
          up.classList.remove('left_active');
          ctrl.classList.remove('left_active');
          break;
          case 39:
            caps.classList.remove('left_active');
            tab.classList.remove('left_active');
            rightAlt.classList.remove("left_active");
            rightShift.classList.remove('left_active');
            shift.classList.remove('left_active');
            win.classList.remove("left_active");
            alt.classList.remove("left_active");
            rightCtrl.classList.remove('left_active');
            right.classList.add('left_active');
            left.classList.remove('left_active');
            down.classList.remove('left_active');
            up.classList.remove('left_active');
            ctrl.classList.remove('left_active');
          break;
          case 46:
          alert('delete');


          break;
          case 8:
          alert('backspace');
          break;
          case 13:
          alert('ENTER');
          break;
          case 17:
            caps.classList.remove('left_active');
            tab.classList.remove('left_active');
            rightAlt.classList.remove("left_active");
            rightShift.classList.remove('left_active');
            shift.classList.remove('left_active');
            win.classList.remove("left_active");
            alt.classList.remove("left_active");
            rightAlt.classList.remove("left_active");
            rightCtrl.classList.add('left_active');
            ctrl.classList.add('left_active');
            left.classList.remove('left_active');
            right.classList.remove('left_active');
            down.classList.remove('left_active');
          break;
          case 18:
            caps.classList.remove('left_active');
            tab.classList.remove('left_active');
            rightShift.classList.remove('left_active');
            shift.classList.remove('left_active');
            win.classList.remove("left_active");
            rightCtrl.classList.remove('left_active');
            rightAlt.classList.add("left_active");
        alt.classList.add("left_active");
        left.classList.remove('left_active');
        down.classList.remove('left_active');
        up.classList.remove('left_active');
        ctrl.classList.remove('left_active');
          break;
          case 16:
         
          break;
          case 9:
            caps.classList.remove('left_active');
         tab.classList.add('left_active');
         rightAlt.classList.remove("left_active");
         rightShift.classList.remove('left_active');
         rightCtrl.classList.remove('left_active');
         shift.classList.remove('left_active');
         left.classList.remove('left_active');
         down.classList.remove('left_active');
         up.classList.remove('left_active');
         ctrl.classList.remove('left_active');
          break;
          case 20:
         caps.classList.add('left_active');
            tab.classList.remove('left_active');
            rightAlt.classList.remove("left_active");
            rightShift.classList.remove('left_active');
            shift.classList.remove('left_active');
            rightCtrl.classList.remove('left_active');
            win.classList.remove('left_active');
            left.classList.remove('left_active');
            down.classList.remove('left_active');
            up.classList.remove('left_active');
            ctrl.classList.remove('left_active');
          break;   
          case 91:
            caps.classList.remove('left_active');
            tab.classList.remove('left_active');
            rightAlt.classList.remove("left_active");
            rightShift.classList.remove('left_active');
            shift.classList.remove('left_active');
            rightCtrl.classList.remove('left_active');
            win.classList.add('left_active');
            left.classList.remove('left_active');
            down.classList.remove('left_active');
            up.classList.remove('left_active');
            ctrl.classList.remove('left_active');

            break;  
               
        }
        if (e.shiftKey)
        {   caps.classList.remove('left_active');
            tab.classList.remove('left_active');
            rightAlt.classList.remove("left_active");
            rightShift.classList.add('left_active');
            rightCtrl.classList.remove('left_active');
            shift.classList.add('left_active');
            left.classList.remove('left_active');
            down.classList.remove('left_active');
            up.classList.remove('left_active');
            ctrl.classList.remove('left_active');
        }

       
  
     
      };
  


  
    //   document.onkeydown = function(event) {
    //       console.log(event.keyCode);
    //   }


};