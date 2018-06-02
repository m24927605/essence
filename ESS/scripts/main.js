$(function() {

    $('.toTop a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });


    $('.leftaside > ul > li').on('click', function() {
        var subnav = $(this).find('ul');
        if (subnav.length > 0) {
            subnav.toggleClass('active');
        }
    });
});

//pdcontent interaction
function pdContentUI(colorChanger, sizeSelector, numberChanger) {

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
        // this.mainSlide.each(function() {
        //     $(this).magnificPopup({
        //         delegate: 'a',
        //         type: 'image',
        //         gallery: {
        //             enabled: true
        //         }
        //     });
        // });
        var initialImgHtml = '';
        for (var i = 0; i < self.colorChanger.length; i++) {
            initialImgHtml = initialImgHtml + '<div class="pdSlide js-pdslide" data-color="' + self.colorChanger.eq(i).data('color') + '"></div>';
        }
        $('.pdMainImg').eq(0).append(initialImgHtml);
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
    // this.mainSlide.removeClass('active');
    // this.mainSlide.each(function() {
    //     if ($(this).data('color') === colorVal) {
    //         $(this).addClass('active');
    //         //active slick slide only if it has not been activated
    //         if (!$(this).hasClass('slick-slider')) {
    //             $(this).slick({
    //                 autoplay: true
    //             });    
    //         }
    //     }
    // });
    $('.js-pdslide').removeClass('active');
    $('.js-pdslide').each(function() {
        if ($(this).data('color') === colorVal) {
            $(this).addClass('active');
            if ((!$(this).hasClass('slick-slider')) && ($(this).find('a').length > 0)) {
                console.log('active slick');
                $(this).slick();
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
    console.log('color: ' + $('input[name="pdcolor"]').val() + ',size: ' + $('input[name="pdsize"]').val() + ',number: ' + $('input[name="pdnumber"]').val());
}