window.addEventListener('lpc:load', function () {
    let navDesk;
    let navTrigger;
    setTimeout( () => {
        navDesk = document.querySelectorAll('.lc-navigation-menu:not(.lc-header-lpc-burger__links)');
    }, 100);
    window.addEventListener('scroll', () => {
        if(window.innerWidth > 767) {
            navTrigger = document.getElementById('direction_block').getBoundingClientRect().top;
            navDesk.forEach( el => {
                if(navTrigger < 0) {
                    el.style.cssText = 'opacity: 1; visibility: visible;';
                } else {
                    el.style.cssText = 'opacity: 0; visibility: hidden;';
                }
            })
        } else {
            return;
        }
    })
});