$(document).ready(function() {

    var newcount=0;

    $('.addtovar').click(function(){
        var allprice= $('#cart-block span#price').attr("price");
        var price= $(this).attr("price");
        var tovarid=$(this).attr("rel");
    
 newprice= Number(allprice) + Number(price);
 newcount= ++;
 
 $('#cart-block span#price').html(newprice+'грн').attr("price",newprice);
 ('#cart-block span.count').html(newcount);
        }
                         
});
});
 