


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
    let enter = document.createElement('div');
    let backspace = document.createElement('div');
    let del = document.createElement('div');

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
    enter.className = "enter";
    backspace.className = "back";
    del.className = "del";

    

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
        
        bottomKeys.append(backspace);
        bottomKeys.append(enter);
        bottomKeys.append(del);

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
    backspace.innerHTML = "<= Backspace";
    enter.innerHTML = "<| Enter";
    del.innerHTML = "Del";
    

    document.onkeydown = function(e) {
        switch(e.keyCode)
        {
          case 38:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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
            up.onclick = function() {
              del.classList.remove("del_a");
              backspace.classList.remove("left_active");
              enter.classList.remove("left_active");
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
            }

          break;
          case 40:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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
          down.onclick = function() {
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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
          }
          break;
          case 37:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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
          left.onclick = function() {
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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
          }
          break;
          case 39:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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

            right.onclick = function() {
              del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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
            }
          break;
          case 46:
          del.classList.add("del_a");
          backspace.classList.remove("left_active");
          enter.classList.remove("left_active");
          caps.classList.remove('left_active');
          tab.classList.remove('left_active');
          rightAlt.classList.remove("left_active");
          rightShift.classList.remove('left_active');
          shift.classList.remove('left_active');
          win.classList.remove("left_active");
          alt.classList.remove("left_active");
          rightCtrl.classList.remove('left_active');
          right.classList.remove('left_active');
          left.classList.remove('left_active');
          down.classList.remove('left_active');
          up.classList.remove('left_active');
          ctrl.classList.remove('left_active');

          del.onclick = function() {
            del.classList.add("del_a");
          backspace.classList.remove("left_active");
          enter.classList.remove("left_active");
          caps.classList.remove('left_active');
          tab.classList.remove('left_active');
          rightAlt.classList.remove("left_active");
          rightShift.classList.remove('left_active');
          shift.classList.remove('left_active');
          win.classList.remove("left_active");
          alt.classList.remove("left_active");
          rightCtrl.classList.remove('left_active');
          right.classList.remove('left_active');
          left.classList.remove('left_active');
          down.classList.remove('left_active');
          up.classList.remove('left_active');
          ctrl.classList.remove('left_active');
          }
          break;
          case 8:
            del.classList.remove("del_a");
              backspace.classList.add("left_active");
            enter.classList.remove("left_active");
            caps.classList.remove('left_active');
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

               backspace.onclick = function() {
                del.classList.remove("del_a");
                backspace.classList.add("left_active");
              enter.classList.remove("left_active");
              caps.classList.remove('left_active');
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
              }
          break;
          case 16:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            caps.classList.remove('left_active');
            tab.classList.remove('left_active');
            rightAlt.classList.remove("left_active");
            rightShift.classList.add('left_active');
            rightCtrl.classList.remove('left_active');
            shift.classList.add('left_active');
            left.classList.remove('left_active');
            down.classList.remove('left_active');
            up.classList.remove('left_active');
            ctrl.classList.remove('left_active'); 

            rightShift.onclick = function() {
              del.classList.remove("del_a");
              backspace.classList.remove("left_active");
              caps.classList.remove('left_active');
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
            break;
          case 13:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
         enter.classList.add("left_active");
         caps.classList.remove('left_active');
         tab.classList.remove('left_active');
            rightShift.classList.remove('left_active');
         shift.classList.remove('left_active');
         win.classList.remove("left_active");
         alt.classList.remove("left_active");
         rightAlt.classList.remove("left_active");
         rightCtrl.classList.remove('left_active');
         ctrl.classList.remove('left_active');
         left.classList.remove('left_active');
         right.classList.remove('left_active');
         down.classList.remove('left_active');


         enter.onclick = function() {
          del.classList.remove("del_a");
          backspace.classList.remove("left_active");
       enter.classList.add("left_active");
       caps.classList.remove('left_active');
       tab.classList.remove('left_active');
          rightShift.classList.remove('left_active');
       shift.classList.remove('left_active');
       win.classList.remove("left_active");
       alt.classList.remove("left_active");
       rightAlt.classList.remove("left_active");
       rightCtrl.classList.remove('left_active');
       ctrl.classList.remove('left_active');
       left.classList.remove('left_active');
       right.classList.remove('left_active');
       down.classList.remove('left_active');
        }
          break;
          case 17:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
            caps.classList.remove('left_active');
            tab.classList.remove('left_active');
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

            
            ctrl.onclick = function() {
              del.classList.remove("del_a");
              backspace.classList.remove("left_active");
              enter.classList.remove("left_active");
              caps.classList.remove('left_active');
              tab.classList.remove('left_active');
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
        }
          break;
          case 18:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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

        alt.onclick = function() {
          del.classList.remove("del_a");
          backspace.classList.remove("left_active");
          enter.classList.remove("left_active");
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
    }
          break;
          case 9:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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

            tab.onclick = function() {
              del.classList.remove("del_a");
              backspace.classList.remove("left_active");
              enter.classList.remove("left_active");
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
        }
          break;
          case 20:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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

            caps.onclick = function() {
              del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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
        }
          break;   
          case 91:
            del.classList.remove("del_a");
            backspace.classList.remove("left_active");
            enter.classList.remove("left_active");
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

            win.onclick = function() {
              del.classList.remove("del_a");
              backspace.classList.remove("left_active");
              enter.classList.remove("left_active");
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
        }
            break;  
               
        }
       

       
  
     
      };
  




};