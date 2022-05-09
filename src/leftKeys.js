export function leftKey() {


    let keyboards = document.querySelector('.keyboards');
    let leftKeys = document.createElement('div');
    let tab = document.createElement('div');
    let caps = document.createElement('div');
    let shift = document.createElement('div');


    leftKeys.className = "left_keys";
    tab.className = "tab";
    caps.className = "caps";
    shift.className = "shift";
        // div.innerHTML = result;

       
    leftKeys.prepend(tab);
    leftKeys.prepend(caps);
    leftKeys.prepend(shift);

    keyboards.prepend(leftKeys);


    
  


}