function addSpace(){
    var pHeight = document.getElementById('page').clientHeight;
    var tHeight = document.getElementById('top').clientHeight;
    var bHeight = document.getElementById('bottom').clientHeight;
    var height = window.innerHeight;
    
    var sHeight = height - bHeight - tHeight - pHeight;
    
    if(sHeight>0){
        document.getElementById('space').style.height = height;
    }
}

window.onload=addSpace;
