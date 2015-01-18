function addSpace(){
    
    var height = window.innerHeight; //available space

        
    document.getElementById('space').innerHTML = window.innerHeight + "x" + window.innerWidth + "x" +  window.outerWidth + "x" + window.outerHeight + "x" + screen.height;
        
        
        
        
    

    
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
window.onload=addSpace;
window.onresize=addSpace;
window.toutch=addSpace;
