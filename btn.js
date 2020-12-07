

//ASIDE BAR BTN//


$(document).ready(function(){
    $('aside').hide()


})

$(document).ready(function(){
    $(".aside_btn").click(function(){
        $("aside").toggle(300)
    })
})



//SEARCH BAR BTN//

$(document).ready(function(){
    $('.search_bar').hide()
})

$('.search_btn').click(function(){
    $('.search_bar').fadeToggle()
})