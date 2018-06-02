function pdContentUI(options) {
    
    this.mainSlideClass = options.mainPicWrap;
    this.colorChanger = $(options.colorChanger);
    this.sizeSelector = $(options.sizeSelector);
    this.numberChanger = $(options.numberChanger);
    this.currentColor = $(options.initColor);
    this.mainSlide = options.mainSlideClass;
    this.thumb = options.thumbClass;
    this.currentSize;
    this.currentNumber;
    this.currentQty; 

    
    this.init = function() {
        var self = this;
        this.colorEvent();
        this.sizeChangeEvent();
        this.qtyChangEvent();
        
        // pdcntUI啟動時先預設 active 第一個color
        this.sizeSelector.eq(0).addClass('active');
        this.currentSize = this.sizeSelector.eq(0).find('select').val();
        this.currentQty = this.sizeSelector.eq(0).find('option:selected').data('qty');
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
        self.colorChanger.parent('li').removeClass('active');
        $(this).parent('li').addClass('active');

        //換左邊整組圖片
        self.activeTargetSlide(colorValue);

        //換尺寸數量
        self.activeTargetSize(colorValue);

    });
}

pdContentUI.prototype.activeTargetSlide = function(colorVal) {
    var self = this;
    console.log('active target ' + $(this.mainSlideClass).length);
    $(this.mainSlideClass).removeClass('active');
    $(this.mainSlideClass).each(function() {
        if ($(this).data('color') === colorVal) {
            $(this).addClass('active');
            //only active slick slide if it has not been activated
            if (!$(this).find(self.mainSlide).hasClass('slick-slider')) {
                $(this).find(self.mainSlide).slick({
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    asNavFor: $(this).find(self.thumb)
                });
                $(this).find(self.thumb).slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    asNavFor: $(this).find(self.mainSlide),
                    arrows: true,
                    dots: false,
                    vertical: false,
                    focusOnSelect: true,
             
                });
            }
        }
    });
}

pdContentUI.prototype.activeTargetSize = function(colorVal) {
    var self = this;
    self.sizeSelector.removeClass('active');
    self.sizeSelector.each(function() {
        if ($(this).data('color') === colorVal) {
            $(this).addClass('active');

            self.currentQty = $(this).find('option:selected').data('qty');
            self.buildNumberSelect(self.currentQty);
        }
    });
    //更新值狀態
    self.currentNumber = 1;
    self.fillHiddenInput(self.currentColor, self.currentSize, self.currentNumber);
}

//切換尺寸
pdContentUI.prototype.sizeChangeEvent = function() {
    var self = this;
    self.sizeSelector.find('select').on('change', function(e) {
        self.currentSize = $(e.target).val();
        
        //重新建構數量下拉
        self.buildNumberSelect(parseInt($(e.target).find('option:selected').data('qty')));
        if (parseInt($(e.target).find('option:selected').data('qty')) === 0) {
            $('.pdcnt_info_btn').addClass('empty');
            self.numberChanger.attr('disabled', true);
        } else {
            $('.pdcnt_info_btn').removeClass('empty');
            self.numberChanger.attr('disabled', false);
            self.currentNumber = 1;
        }
        self.fillHiddenInput(self.currentColor, self.currentSize, self.currentNumber);
    });
}

pdContentUI.prototype.buildNumberSelect = function(qty) {
    var optionHtml = '';
    this.numberChanger.empty();
    for (var i = 0; i < qty; i++) {
        optionHtml = optionHtml + '<option value="' + (i+1) + '">' + (i+1) + '</option>';
    }
    this.numberChanger.append(optionHtml);
}

pdContentUI.prototype.qtyChangEvent = function() {
    var self = this;
    self.numberChanger.on('change', function() {
        var num = parseInt(self.numberChanger.val());
        self.currentNumber = num;
        self.fillHiddenInput(self.currentColor, self.currentSize, self.currentNumber)
    });
}

pdContentUI.prototype.fillHiddenInput = function(color, size, pdnumber) { 
    $('input[name="pdcolor"]').val(color); 
    $('input[name="pdsize"]').val(size); 
    $('input[name="pdnumber"]').val(pdnumber); 
    console.log('color: ' + $('input[name="pdcolor"]').val() + ',size: ' + $('input[name="pdsize"]').val() + ',number: ' + $('input[name="pdnumber"]').val());
}