function addSpace(){

        var offset = document.getElementById('bottom').offsetTop;
    
        var height = window.innerHeight; //available space

        var bottom = document.getElementById('bottom').offsetHeight;
    
        var space = height - offset - bottom;
        
        if(typeof(window.orientation) == "undefined"){
            space += 60;
            }
            
        if(space>100){
            document.getElementById('space').style.height = space;
            document.body.style.overflowY = 'hidden';
            }
        else{
            document.getElementById('space').style.height = 100;
            document.body.style.overflowY = 'scroll';
            }
       // }
    }

if(typeof(window.orientation) == "undefined"){
    window.onresize=addSpace;
    }
else{
    window.onscroll=addSpace;    
    }
window.onload=addSpace;

