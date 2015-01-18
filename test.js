function addSpace(){
    
    if(typeof(window.orientation) == "undefined" || typeof(height) == "undefined"){

        var height = window.innerHeight; //available space
    
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
    }
window.onload=addSpace;
window.onresize=addSpace;
