function addSpace(){
    
    var height = window.innerHeight; //available space
        
    document.getElementById('space').innerHTML = window.innerHeight + "x" + window.orientation + "x" + document.body.scrollHeight + "x";
    
    document.getElementById('space').style.height = height;
    
    var scroll = document.body.scrollHeight;
    
    var content = scroll - height;
    
    var space = height-content; //size of space div
    
    if(space>100){
        document.getElementById('space').style.height = space;
        document.body.style.overflowY = 'hidden';
        }
    else{
        document.getElementById('space').style.height = 100;
        document.body.style.overflowY = 'scroll';
        }
}

if(typeof(window.orientation) == "undefined"){
    window.onresize=addSpace;
    }

window.onload=addSpace;

