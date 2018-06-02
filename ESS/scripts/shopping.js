$(function() {
    // // 數量減
    // $(".minus").click(function() {
    //     var t = $(this).parent().find('.num');
    //     t.text(parseInt(t.text()) - 1);
    //     if (t.text() <= 1) {
    //         t.text(1);
    //     }
    //     TotalPrice();
    // });
    // // 數量加
    // $(".plus").click(function() {
    //     var t = $(this).parent().find('.num');
    //     t.text(parseInt(t.text()) + 1);
    //     if (t.text() <= 1) {
    //         t.text(1);
    //     }
    //     TotalPrice();

    // });

    /******------------分割線-----------------******/
    // 點擊商品按鈕
      
    $(".goodsCheck").click(function() {    
        var goods = $(this).closest(".shop-group-item").find(".goodsCheck"); //獲取本店舖的所有商品
            
        var goodsC = $(this).closest(".shop-group-item").find(".goodsCheck:checked"); //獲取本店鋪所有被選中的商品
            
        var Shops = $(this).closest(".shop-group-item").find(".shopCheck"); //獲取本店舖的全選按鈕
            
        if (goods.length == goodsC.length) { //如果選中的商品等於所有商品
                  
            Shops.prop('checked', true); //店鋪全選按鈕被選中
                  
            if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店鋪被選中的數量等於所有店舖的數量
                        
                $("#AllCheck").prop('checked', true); //全選按鈕被選中
                        
                TotalPrice();      
            } else {        
                $("#AllCheck").prop('checked', false); //else全選按鈕不被選中
                        
                TotalPrice();      
            }    
        } else { //如果選中的商品不等於所有商品
                  
            Shops.prop('checked', false); //店鋪全選按鈕不被選中
                  
            $("#AllCheck").prop('checked', false); //全選按鈕也不被選中
                   // 計算
                  
            TotalPrice();       // 計算
                
        }  
    });   // 點擊店鋪按鈕
      
    $(".shopCheck").click(function() {    
        if ($(this).prop("checked") == true) { //如果店鋪按鈕被選中
                  
            $(this).parents(".shop-group-item").find(".goods-check").prop('checked', true); //店舖內的所有商品按鈕也被選中
                  
            if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店鋪被選中的數量等於所有店舖的數量
                        
                $("#AllCheck").prop('checked', true); //全選按鈕被選中
                        
                TotalPrice();      
            } else {        
                $("#AllCheck").prop('checked', false); //else全選按鈕不被選中
                        
                TotalPrice();      
            }    
        } else { //如果店鋪按鈕不被選中
                  
            $(this).parents(".shop-group-item").find(".goods-check").prop('checked', false); //店舖內的所有商品也不被全選
                  
            $("#AllCheck").prop('checked', false); //全選按鈕也不被選中
                  
            TotalPrice();    
        }  
    });   // 點擊全選按鈕
      
    $("#AllCheck").click(function() {    
        if ($(this).prop("checked") == true) { //如果全選按鈕被選中
                  
            $(".goods-check").prop('checked', true); //所有按鈕都被選中
                  
            TotalPrice();    
        } else {      
            $(".goods-check").prop('checked', false); //else所有按鈕不全選
                  
            TotalPrice();    
        }    
        $(".shopCheck").change(); //執行店鋪全選的操作
          
    });
    //計算
      
    function TotalPrice() {    
        var allprice = 0; //總價
            
        $(".shop-group-item").each(function() { //循環每個店鋪
                  
            var oprice = 0; //店鋪總價
                  
            $(this).find(".goodsCheck").each(function() { //循環店舖裡面的商品
                        
                if ($(this).is(":checked")) { //如果該商品被選中
                              
                    var num = parseInt($(this).parents(".shop-info").find(".num").text()); //得到商品的數量
                              
                    var price = parseFloat($(this).parents(".shop-info").find(".price").text()); //得到商品的單價
                              
                    var total = price * num; //計算單個商品的總價
                              
                    oprice += total; //計算該店舖的總價
                            
                }        
                $(this).closest(".shop-group-item").find(".ShopTotal").text(oprice.toFixed(2)); //顯示被選中商品的店鋪總價
                      
            });      
            var oneprice = parseFloat($(this).find(".ShopTotal").text()); //得到每個店舖的總價
                  
            allprice += oneprice; //計算所有店舖的總價
                
        });    
        $("#AllTotal").text(allprice.toFixed(2)); //輸出全部總價
          
    }
});