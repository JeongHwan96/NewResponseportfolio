$(window).on('scroll',function() {
    if($(window).scrollTop()<500) {
        $('.html').removeClass("HtmlGrahp")
        $('.css').removeClass("CssGrahp");
        $('.scss').removeClass("ScssGrahp");
        $('.js').removeClass("JsGrahp");
    }
})

$(window).on('scroll',function() {
    if($(window).scrollTop()>1500) {
        $('.html').removeClass("HtmlGrahp")
        $('.css').removeClass("CssGrahp");
        $('.scss').removeClass("ScssGrahp");
        $('.js').removeClass("JsGrahp");
    }
})
