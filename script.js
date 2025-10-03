const isMobile = window.innerWidth < 685;

window.addEventListener('scroll', function () {
    const sky = document.querySelector('.sky-background');
    const title = document.querySelector('.hero-title');
    const triggerDesktop = window.innerHeight * 0.8;
    const triggerMobile = window.innerHeight * 0.48;

    if (isMobile) {
        sky.style.position = 'absolute';
        if (window.scrollY >= triggerMobile) {
            sky.style.position = 'absolute';
            title.style.position = 'absolute';
        } else {
            title.style.position = 'fixed';
        }
    } else {
        if (window.scrollY >= triggerDesktop) {
            sky.style.position = 'absolute';
            title.style.position = 'absolute';
        } else {
            sky.style.position = 'fixed';
            title.style.position = 'fixed';
        }
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

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const isScrolled = window.scrollY > 400;
    if (isScrolled) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
        header.style.paddingBlock = '1em';
        if (isMobile) {
            header.style.paddingBlock = '0.5rem';
        }
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.padding = '56px';
        if (isMobile) {
            header.style.paddingBlock = '1em';
        }
    }
});

if (isMobile) {
    document.getElementById("first-polaroid").classList.add("show-polaroid-1");
    document.getElementById("second-polaroid").classList.add("show-polaroid-2");
    document.getElementById("third-polaroid").classList.add("show-polaroid-3");
    document.getElementById("fourth-polaroid").classList.add("show-polaroid-4");
} else {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            document.getElementById("first-polaroid").classList.add("show-polaroid-1");
            document.getElementById("second-polaroid").classList.add("show-polaroid-2");
            document.getElementById("third-polaroid").classList.add("show-polaroid-3");
            document.getElementById("fourth-polaroid").classList.add("show-polaroid-4");
        }
    });
}

window.addEventListener("scroll", () => {
    const emperorTitle = document.querySelector(".emperor-title");

    if (window.scrollY > window.innerHeight * 0.2) {
        emperorTitle.classList.add("fade-in");
    }
});

const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerIconClose = document.querySelector(".hamburger-icon-close");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("open")) {
        hamburger.classList.remove("open");
        nav.style.display = "none";
        hamburgerIcon.style.display = "flex";
        hamburgerIconClose.style.display = "none";
    } else {
        hamburger.classList.add("open");
        nav.style.display = "flex";
        hamburgerIcon.style.display = "none";
        hamburgerIconClose.style.display = "flex";
    }
});

const sparks = document.querySelectorAll('.emperor-spark');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

sparks.forEach(spark => {
    observer.observe(spark);
});

const emperorInfo = document.querySelector('.emperor-info');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer2.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer2.observe(emperorInfo);

const divider = document.querySelector('.divider');
const emperorImage = document.querySelector('.emperor-image');
const agesListContainer = document.querySelector('.ages-list-container');
observer2.observe(divider);
observer2.observe(emperorImage);
observer2.observe(agesListContainer);

const agesAnnountcement = document.querySelector('.ages-announcement');

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
}, {
    threshold: 0.5,
    rootMargin: "-30% 0px -10% 0px"
});


observer3.observe(agesAnnountcement);


const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer4.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const backCard = document.querySelector('#back-card');
const frontCard = document.querySelector('#front-card');
observer4.observe(backCard);
observer4.observe(frontCard);