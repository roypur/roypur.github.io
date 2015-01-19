function addSpace(){
    
    var last = document.body.dataset.height;
    
    if(typeof(last) == "undefined" || window.innerHeight > last*1){
        document.body.dataset.height = window.innerHeight;
        }
        
    document.getElementById('space').innerHTML = window.innerHeight + "x" + last;
    
    document.body.dataset.height = 
    
    document.getElementById('space').style.height = 0;
    
    var offset = document.getElementById('bottom').offsetTop;
    
    var height = window.innerHeight; //available space

    var bottom = document.getElementById('bottom').offsetHeight;
    
    var space = height - offset - bottom;
    
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

