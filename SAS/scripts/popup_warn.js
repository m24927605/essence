
//Pop 提示訊息
 var popmodal2 = document.getElementById('myPopUp2');
        var btn = document.getElementsByClassName("popBtn2");
        var span = document.getElementsByClassName("close2")[0];

        for (var i = 0; i < btn.length; i++) {
            btn[i].onclick = function() {
                popmodal2.style.display = "block";
            }
        }
        // btn.onclick = function() {
        //     popmodal.style.display = "block";
        // }
        span.onclick = function() {
            popmodal2.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == popmodal2) {
                poomodal2.style.display = "none";
            }
        }



