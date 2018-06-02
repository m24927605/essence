
//myPopUp3 (PDSINGLE)
var popmodal3 = document.getElementById('myPopUp3');
var btn = document.getElementById("popBtn3");
var span = document.getElementsByClassName("close3")[0];
btn.onclick = function() {
    popmodal3.style.display = "block";
}
span.onclick = function() {
    popmodal3.style.display = "none";
}


//myPopUp4 (PDSINGLE)
var popmodal4 = document.getElementById('myPopUp4');
var btn = document.getElementById("popBtn4");
var span = document.getElementsByClassName("close4")[0];
btn.onclick = function() {
    popmodal4.style.display = "block";
}
span.onclick = function() {
    popmodal4.style.display = "none";
}


//myPopUp22 (PDSINGLE)
var popmodal22 = document.getElementById('myPopUp22');
var btn = document.getElementById("popBtn22");
var span = document.getElementsByClassName("close22")[0];
btn.onclick = function() {
    popmodal22.style.display = "block";
}
span.onclick = function() {
    popmodal22.style.display = "none";
}

//myPopUp5 (PDSINGLE !~pd info 三小塊)
var popmodal5 = document.getElementById('myPopUp5');
        var btn = document.getElementsByClassName("popBtn5");
        var span = document.getElementsByClassName("close5")[0];
        for (var i = 0; i < btn.length; i++) {
            btn[i].onclick = function() {
                popmodal5.style.display = "block";
            }
        }        
        span.onclick = function() {
            popmodal5.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == popmodal5) {
                poomodal5.style.display = "none";
            }
        }


//POP貨到通知
var modal_arrival = document.getElementById('arrival_note');
var btn = document.getElementById("arrivalBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal_arrival.style.display = "block";
}
span.onclick = function() {
    modal_arrival.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal_arrival) {
        modal_arrival.style.display = "none";
    }
}




//myPopUp6 (忘記密碼)
var popmodal6 = document.getElementById('myPopUp6');
var btn = document.getElementById("popBtn6");
var span = document.getElementsByClassName("close6")[0];
btn.onclick = function() {
    popmodal6.style.display = "block";
}
span.onclick = function() {
    popmodal6.style.display = "none";
}



//Pop 套用常用收件人
 var popmodal20 = document.getElementById('myPopUp20');
        var btn = document.getElementsByClassName("popBtn20");
        var span = document.getElementsByClassName("close20")[0];

        for (var i = 0; i < btn.length; i++) {
            btn[i].onclick = function() {
                popmodal20.style.display = "block";
            }
        }
        // btn.onclick = function() {
        //     popmodal.style.display = "block";
        // }
        span.onclick = function() {
            popmodal20.style.display = "none";
        }
        
