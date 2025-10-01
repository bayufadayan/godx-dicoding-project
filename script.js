window.addEventListener('scroll', function () {
    const sky = document.querySelector('.sky-background');
    const title = document.querySelector('.hero-title');
    const trigger = window.innerHeight * 0.8;

    if (window.scrollY >= trigger) {
        sky.style.position = 'absolute';
        title.style.position = 'absolute';
        title.style.top = '35vh';
    } else {
        sky.style.position = 'fixed';
        title.style.position = 'fixed';
        title.style.top = '35vh';
    }
});