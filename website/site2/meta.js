alert("Это проверка на бота, на картинке написана капча. Введите капчу в прямоугольник.")


$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})
