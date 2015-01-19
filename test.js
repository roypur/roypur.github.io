function addSpace(){

    document.getElementById('space').innerHTML = window.innerHeight + "x" + document.body.scrollHeight + "x" + document.getElementById('bottom').offsetTop;

    var height = window.innerHeight; //available space

    document.getElementById('space').style.height = height;
    
    
    var scroll = document.body.scrollHeight;
    var content = scroll - height;
    
    var space = height-content; //size of space div
    
    console.log(document.getElementById('bottom').offsetTop);
    
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
else{
    window.onscroll=addSpace;
    }



window.onload=addSpace;

