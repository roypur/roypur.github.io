function addSpace(){
    
    var last = document.body.dataset.height;
    
    //if(typeof(last) == "undefined" || window.innerHeight > last*1 || typeof(window.orientation) == "undefined"){
        document.body.dataset.height = window.innerHeight;
        
        
        
    
        document.getElementById('space').style.height = 0;
        
        var body = document.body.scrollHeight;
        
        var total = document.getElementById('bottom').offsetTop + document.getElementById('bottom').offsetHeight;
        
        if(body > total){
            document.getElementById('space').innerHTML = body + "x" + total;
            }
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
       // }
    }

if(typeof(window.orientation) == "undefined"){
    window.onresize=addSpace;
    }
else{
    window.onscroll=addSpace;    
    }
window.onload=addSpace;

