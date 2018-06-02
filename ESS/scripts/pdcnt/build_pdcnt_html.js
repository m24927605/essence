define(function(require) {

    var pdContentUI = require('./pdcontent_ui');

    function buildHTML(imgs) {
        
        var finalHTML = '';
                                
        for (var colorkey in imgs) {
            var mainImgHTML = '';

            imgs[colorkey].forEach(function(colorimg) {
                var imgThumb = colorimg.thumb;
                if (imgThumb === '') {
                    imgThumb = colorimg.img;
                }
                mainImgHTML = mainImgHTML + '<a href="' + colorimg.img + '"><img src="' + imgThumb + '" alt=""></a>'
            });
            
            $('.pdMainImg').find('.pdSlide[data-color=' + colorkey + ']').append(mainImgHTML);
            
            if ((colorCode === colorkey) && ($('.pdMainImg').find('.pdSlide[data-color=' + colorkey + ']').hasClass('active'))) {
                $('.pdMainImg').find('.pdSlide[data-color=' + colorkey + ']').slick();
            }
        }

        $('.js-pdslide').each(function() {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
        // $('.pdMainImg').append(finalHTML);
        

        // new pdContentUI($('.js-pdslide'), $('.js-pdcolor a'), $('.js-pdsize'), $('.js-pdnumber')).init();

        // if (colorCode === undefined) {
        //     $('.js-pdcolor a').eq(0).click();    
        // } else {
        //     $('.js-pdcolor a').each(function() {
        //         if (($(this).data('color')).toString() === colorCode) {
        //             $(this).click();
        //         }
        //     });
        // }

    }

    return buildHTML;
})
