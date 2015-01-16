function addSpace(){
    document.getElementById('space').style.height = 0;
    
    var pHeight = document.body.offsetHeight; //height of the content
    var height = window.innerHeight; //available space
    var sHeight = height-pHeight; //size of space div
    
    if(sHeight>100){
        document.getElementById('space').style.height = sHeight;
        document.body.style.overflowY = 'hidden';
        }
    else{
        document.getElementById('space').style.height = 100;
        document.body.style.overflowY = 'scroll';
        }
}

window.onload=addSpace;
window.onresize=addSpace;
