define(function(require) {

    var buildHTML = require('./build_pdcnt_html');

    function rearrangeImgarray(imgarray) { 
        var newImgarray = {};
        var colorArray = [];
        imgarray.forEach(function(imgobj) {
            // console.log('order ' + imgobj);
            if (colorArray.indexOf(imgobj.color) === -1) {
                colorArray.push(imgobj.color);
                newImgarray[imgobj.color] = [];
                addImg(imgobj);
                
            } else { 
                addImg(imgobj);
            }
        }); 

        function addImg(imgobj) {
            if (imgobj.size === 'big') {
                newImgarray[imgobj.color].push({"img": imgobj.img, "thumb": ""});
            } else if (imgobj.size === 'small') {
                if (newImgarray[imgobj.color][imgobj.order] !== undefined) { //先確定有大圖
                    newImgarray[imgobj.color][imgobj.order].thumb = imgobj.img;    
                }
            }
        }
        
        buildHTML(newImgarray);
    }

    return rearrangeImgarray;

});

