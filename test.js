function addSpace(){
    
    var first = document.body.dataset.first;
    
    if(typeof(first) == "undefined"){
        document.body.dataset.first = false;
        }
        
    if(typeof(window.orientation) != "undefined"){
        var height = screen.height; //available space
        }
    else{
        var height = window.innerHeight; //available space
        }
        
    alert(height + "x" + window.innerHeight + "x" + outer.innerHeight);
        
        
        
        
    
    //if(typeof(window.orientation) == "undefined" || typeof(first) == "undefined"){
    
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
        //}
    }
window.onload=addSpace;
window.onresize=addSpace;
