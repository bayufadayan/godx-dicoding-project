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

const dropdown = document.getElementById('dropdown');
const selected = dropdown.querySelector('.selected');
const hiddenInput = dropdown.querySelector('input');
const list = dropdown.querySelector('.dropdown-list');

dropdown.addEventListener('click', () => {
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
});

list.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        selected.textContent = item.textContent;
        hiddenInput.value = item.dataset.value;
        list.style.display = 'none';
    });
});
