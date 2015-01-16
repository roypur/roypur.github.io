function addSpace(){
    var pHeight = document.body.offsetHeight;
    var height = window.innerHeight;
    
    var sHeight = height-pHeight;
    
    if(sHeight>0){
        document.getElementById('space').style.height = sHeight+2;
        document.body.style.overflowY = 'hidden';
    }
    else{
        document.getElementById('space').style.height = 50;
        document.body.style.overflowY = 'scroll';
        }
}

window.onload=addSpace;
