let checkBox = document.getElementById("toggle");

function onoff() {
    if (checkBox.checked == true){
        document.body.style.backgroundColor = 'rgb(222, 222, 222)';
        document.getElementById('bulb').src='bulb.png';
      } 
    else {
        document.body.style.backgroundColor = 'rgb(41, 41, 41)';
        document.getElementById('bulb').src='bulb1.png';
      }
    }