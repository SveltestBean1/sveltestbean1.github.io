$(function(){
    $('a.title').on("mouseover",function(){
        $(this).animate({
            fontSize: "+=5"
        }, 500)
    })
})
$(function(){
    $("a.title").on("mouseout", function(){
        $(this).animate({
            fontSize: "-=5"
        }, 500)
    })
})