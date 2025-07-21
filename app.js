let checkBox = document.getElementById("toggle");

function onoff() {
    if (checkBox.checked == true){
        document.getElementById('bulb').src='bulb_on.png';
      } 
    else {
        document.getElementById('bulb').src='bulb_off.png';
      }
    }