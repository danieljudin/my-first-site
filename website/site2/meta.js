alert("Это проверка на бота, на картинке написана капча. Введите капчу в прямоугольник.")


document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}
