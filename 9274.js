function setWrapperHeight() {
    // Найти элемент title__wrapper
    var wrapper = document.querySelector(".title__wrapper");

    // Найти все элементы title__text
    var texts = document.querySelectorAll(".title__text");

    // Определить максимальную высоту среди всех элементов title__text
    var maxHeight = 0;
    texts.forEach(function(text) {
        var height = text.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Установить высоту wrapper в соответствии с максимальной высотой
    wrapper.style.height = maxHeight + "px";
    console.log(maxHeight);
}

// Вызывать setWrapperHeight при загрузке страницы
window.addEventListener('lpc:load', setWrapperHeight);

// Вызывать setWrapperHeight при изменении размера окна
window.addEventListener('resize', setWrapperHeight);
