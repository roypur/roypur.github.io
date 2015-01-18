function addSpace(){
    
    document.body.style.zoom="100%";
    
    var height = window.innerHeight; //available space
    
    document.getElementById('space').style.height = height;
    
    var scroll = document.body.scrollHeight;
    
    var content = scroll - height;
    
    var space = height-content; //size of space div
    
    document.getElementById('space').innerHTML = "scroll" + scroll + "<br><br>height" + height + "<br><br>clientheight" + window.clientHeight;
    
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
