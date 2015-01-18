function addSpace(){
    
    var height;
    
    var calc = Math.ceil((screen.height/window.outerHeight)*window.innerHeight);
        
    document.getElementById('space').innerHTML = window.innerHeight + "x" + screen.height + "x" + calc + "x";
    
    
    if(typeof(window.orientation) == "undefined"){
        height = window.innerHeight; //available space
        }
    else{
        height = calc;
        }
    
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

