define(function(require) {

    var rearrangeImgarray = require('./rearrange_img_array');

    function getCorrectImg(imgarray) {
        
        this.correctImgs = [];
        this.imgsLength = imgarray.length;
        this.loadIdx = 0;

        this.loadImg = function(imgobj) {
            var img = new Image();
            img.onload = function() {

                correctImgs.push({"color": imgobj.color,"img": imgobj.img, "size": imgobj.size, "order": imgobj.order});

                if (loadIdx === (imgsLength - 1)) {
                    // console.log('stop: ' + correctImgs);
                    rearrangeImgarray(correctImgs);
                    return;
                }
                if (loadIdx <= imgsLength) {
                    loadIdx ++;
                    loadImg(imgarray[loadIdx]);    
                }
            }
            img.onerror = function() {
                if (loadIdx === (imgsLength - 1)) {
                    // console.log('stop: ' + correctImgs);
                    rearrangeImgarray(correctImgs);
                    return;
                }
                if (loadIdx < (imgsLength - 1)) {
                    loadIdx ++;
                    loadImg(imgarray[loadIdx]);    
                }
            }
            
            
            img.src = imgobj.img;
        }

        loadImg(imgarray[loadIdx]);
    }
    
    $(function() {
        
        return getCorrectImg(imgs);

    });
    
})
