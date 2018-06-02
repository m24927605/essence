function pdContentUI(mainPicWrap, colorChanger, sizeSelector, numberChanger) {

    this.mainSlide = mainPicWrap;
    this.colorChanger = colorChanger;
    this.sizeSelector = sizeSelector;
    this.numberChanger = numberChanger;
    this.currentColor;
    this.currentSize;
    this.currentNumber;


    this.init = function() {
        var self = this;
        this.colorEvent();
        this.sizeChangeEvent();
        this.qtyChangEvent();
        this.mainSlide.each(function() {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }

}

//pdcontent點顏色 換左邊整組圖片&換尺寸數量
pdContentUI.prototype.colorEvent = function() {
    var self = this;
    this.colorChanger.on('click', function(e) {
        e.preventDefault();
        var colorValue = $(this).data('color');
        self.currentColor = colorValue;

        //改變選顏色區樣式
        self.colorChanger.removeClass('active');
        $(this).addClass('active');

        //換左邊整組圖片
        self.activeTargetSlide(colorValue);

        //換尺寸數量
        self.activeTargetSize(colorValue);

    });
}

pdContentUI.prototype.activeTargetSlide = function(colorVal) {
    this.mainSlide.removeClass('active');
    this.mainSlide.each(function() {
        if ($(this).data('color') === colorVal) {
            $(this).addClass('active');
            //active slick slide only if it has not been activated
            if (!$(this).hasClass('slick-slider')) {
                $(this).slick({
                    autoplay: true
                });
            }
        }
    });
}

pdContentUI.prototype.activeTargetSize = function(colorVal) {
    var self = this;
    var activeQty = 0;
    self.sizeSelector.removeClass('active');
    self.sizeSelector.each(function() {
        if ($(this).data('color') === colorVal) {
            $(this).addClass('active');

            //調整default數量
            if ($(this).find('li.active').length === 0) {
                self.currentSize = $(this).find('li').eq(0).find('a').text();
                $(this).find('li').eq(0).addClass('active');
                activeQty = parseInt($(this).find('li').eq(0).find('a').data('qty'));
            } else {
                self.currentSize = $(this).find('li.active a').text();
                activeQty = parseInt($(this).find('li.active a').data('qty'));
            }
            self.buildNumberSelect(activeQty);
        }
    });
    //更新值狀態
    self.currentNumber = 1;
    self.fillHiddenInput(self.currentColor, self.currentSize, self.currentNumber);
}

//切換尺寸
pdContentUI.prototype.sizeChangeEvent = function() {
    var self = this;
    this.sizeSelector.find('a').on('click', function(e) {
        e.preventDefault();
        self.currentSize = $(e.target).text();
        self.sizeSelector.find('li').removeClass('active');
        $(e.target).parents('li').addClass('active');

        //重新建構數量下拉
        self.buildNumberSelect(parseInt($(this).data('qty')));
        self.currentNumber = 1;

        self.fillHiddenInput(self.currentColor, self.currentSize, self.currentNumber);
    });
}

pdContentUI.prototype.buildNumberSelect = function(qty) {
    var optionHtml = '';
    this.numberChanger.find('select').empty();
    for (var i = 0; i < qty; i++) {
        optionHtml = optionHtml + '<option value="' + (i + 1) + '">' + (i + 1) + '</option>';
    }
    this.numberChanger.find('select').append(optionHtml);
}

pdContentUI.prototype.qtyChangEvent = function() {
    var self = this;
    this.numberChanger.on('change', function() {
        var qty = parseInt(self.numberChanger.find('select').val());
        self.currentNumber = qty;
        self.fillHiddenInput(self.currentColor, self.currentSize, self.currentNumber)
    });
}

pdContentUI.prototype.fillHiddenInput = function(color, size, pdnumber) {
    $('input[name="pdcolor"]').val(color);
    $('input[name="pdsize"]').val(size);
    $('input[name="pdnumber"]').val(pdnumber);
    // console.log('color: ' + $('input[name="pdcolor"]').val() + ',size: ' + $('input[name="pdsize"]').val() + ',number: ' + $('input[name="pdnumber"]').val());
}



function buildHTML(imgs) {

    var finalHTML = '';

    for (var colorkey in imgs) {
        var mainImgHTML = '<div class="pdSlide js-pdslide" data-color="' + colorkey + '">';

        imgs[colorkey].forEach(function(colorimg) {
            mainImgHTML = mainImgHTML + '<a href="' + colorimg + '"><img src="' + colorimg + '" alt=""></a>'
        });
        finalHTML = finalHTML + mainImgHTML + '</div>';

    }

    $('.pdMainImg').append(finalHTML);


    new pdContentUI($('.js-pdslide'), $('.js-pdcolor a'), $('.js-pdsize'), $('.js-pdnumber')).init();

    // $('.js-pdcolor li').eq(0).find('a').click();
    if (colorCode === undefined) {
        $('.js-pdcolor a').eq(0).click();
    } else {
        $('.js-pdcolor a').each(function() {
            if (($(this).data('color')).toString() === colorCode) {
                $(this).click();
            }
        });
    }

}

function rearrangeImgarray(imgarray) {
    this.newImgarray = {};
    this.colorArray = [];
    imgarray.forEach(function(imgobj) {
        if (colorArray.indexOf(imgobj.color) === -1) {
            colorArray.push(imgobj.color);
            newImgarray[imgobj.color] = [];
            newImgarray[imgobj.color].push(imgobj.img);
        } else {
            newImgarray[imgobj.color].push(imgobj.img);
        }
    });

    buildHTML(newImgarray);
    // console.log('rearrange image array ' + JSON.stringify(newImgarray));
}

function getCorrectImg(imgarray) {

    this.correctImgs = [];
    this.imgsLength = imgarray.length;
    this.loadIdx = 0;

    this.loadImg = function(imgobj) {
        console.log('test loadidx ' + loadIdx);
        var img = new Image();
        img.onload = function() {

            correctImgs.push({ "color": imgobj.color, "img": imgobj.img });

            if (loadIdx === (imgsLength - 1)) {
                // console.log('stop: ' + correctImgs);
                rearrangeImgarray(correctImgs);
                return;
            }
            if (loadIdx <= imgsLength) {
                loadIdx++;
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
                loadIdx++;
                loadImg(imgarray[loadIdx]);
            }
        }


        img.src = imgobj.img;
    }

    loadImg(imgarray[loadIdx]);
}

$(function() {
    getCorrectImg(imgs);
});