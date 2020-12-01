window.onload = function() {
    var angleleft = document.getElementById("angleleft");
    var angleright = document.getElementById("angleright");
    var contentPhoto = document.getElementById("contentPhoto");
    var timeContent = null;
    var idx = Math.floor(Math.random()*5 + 1);

    showMenu(idx);
    timeGo();

    for(var i = 1; i <= 5; i++) {
        document.getElementById("a" + i).addEventListener("click", menuClick)
    }

    angleleft.addEventListener("click", leftFn);

    angleright.addEventListener("click", rightFn);

    function leftFn(){
        idx--;
        if(idx < 1) {
            idx = 5;
        }
        clearInterval(timeContent);
        timeGo();
        showMenu(idx);
    }
    
    function rightFn(){
        idx++;
        if(idx > 5) {
            idx = 1;
        }
        clearInterval(timeContent);
        timeGo();
        showMenu(idx);
    }

    function menuClick() {
        idx = this.id.substr(1);
        clearInterval(timeContent);
        timeGo();
        showMenu(idx);
    }

    function showMenu(idx){
        for(var i = 1; i <= 5; i++){
            document.getElementById("a" + i).style.opacity = 0.5;
        }
        document.getElementById("a" + idx).style.opacity = 1;
        contentPhoto.style.backgroundImage = 'url("../../../../example01/images/05/big/a' + idx + '.jpg")';
    }

    function timeGo(){
        timeContent = setInterval(function(){
            idx++;
            if(idx > 5){
                idx = 1;
            };
            showMenu(idx);
        }, 3000)
    }
}
