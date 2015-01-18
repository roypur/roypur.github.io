function addSpace(){
    
    var height = window.innerHeight; //available space
    
    if((typeof(window.orientation) != Number) || (document.body.dataset.run != "false")){
        document.body.dataset.run = "false";
        
    document.getElementById('space').innerHTML = window.innerHeight + "x" + window.orientation + "x" + document.body.scrollHeight + "x" + document.body.dataset.run;
        
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
            
    } //end run if
}

window.onload=addSpace;
window.onresize=addSpace;
