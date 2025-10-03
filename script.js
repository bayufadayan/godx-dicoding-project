const isMobile = window.innerWidth < 685;

// Parallax/hero section scroll logic
window.addEventListener('scroll', () => {
    const sky = document.querySelector('.sky-background');
    const title = document.querySelector('.hero-title');
    const triggerDesktop = window.innerHeight * 0.8;
    const triggerMobile = window.innerHeight * 0.48;

    if (!sky || !title) return;

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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    const isScrolled = window.scrollY > 400;
    if (isScrolled) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
        header.style.paddingBlock = isMobile ? '0.5rem' : '1em';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.padding = '56px';
        if (isMobile) header.style.paddingBlock = '1em';
    }
});

// Polaroid animation
const polaroidIds = [
    "first-polaroid",
    "second-polaroid",
    "third-polaroid",
    "fourth-polaroid"
];

if (isMobile) {
    polaroidIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) el.classList.add(`show-polaroid-${idx + 1}`);
    });
} else {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            polaroidIds.forEach((id, idx) => {
                const el = document.getElementById(id);
                if (el) el.classList.add(`show-polaroid-${idx + 1}`);
            });
        }
    });
}

// Emperor title fade-in
window.addEventListener("scroll", () => {
    const emperorTitle = document.querySelector(".emperor-title");
    if (emperorTitle && window.scrollY > window.innerHeight * 0.2) {
        emperorTitle.classList.add("fade-in");
    }
});

// Hamburger & hourglass menu logic
const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerIconClose = document.querySelector(".hamburger-icon-close");
const hourglass = document.querySelector(".hourglass");
const hourglassIcon = document.querySelector(".hourglass-icon");
const timeline = document.querySelector("#timeline");
const nav = document.querySelector("nav");

if (hamburger && hamburgerIcon && hamburgerIconClose && nav && hourglass && hourglassIcon && timeline) {
    hamburger.addEventListener("click", () => {
        const isOpen = hamburger.classList.contains("open");
        hamburger.classList.toggle("open", !isOpen);
        nav.style.display = isOpen ? "none" : "flex";
        hamburgerIcon.style.display = isOpen ? "flex" : "none";
        hamburgerIconClose.style.display = isOpen ? "none" : "flex";
        if (!isOpen) {
            hourglass.classList.remove("open");
            timeline.style.display = "none";
            hourglassIcon.style.transform = "rotate(-19.85deg)";
        }
    });

    hourglass.addEventListener("click", () => {
        const isOpen = hourglass.classList.contains("open");
        hourglass.classList.toggle("open", !isOpen);
        timeline.style.display = isOpen ? "none" : "flex";
        hourglassIcon.style.transform = isOpen ? "rotate(-19.85deg)" : "rotate(0)";
        if (!isOpen) {
            hamburger.classList.remove("open");
            nav.style.display = "none";
            hamburgerIcon.style.display = "flex";
            hamburgerIconClose.style.display = "none";
        }
    });
}

// Emperor spark animation on intersection
const sparks = document.querySelectorAll('.emperor-spark');
if (sparks.length) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    sparks.forEach(spark => observer.observe(spark));
}

// Fade-in for emperor info, divider, image, ages list
const fadeInTargets = [
    '.emperor-info',
    '.divider',
    '.emperor-image',
    '.ages-list-container'
];
const observer2 = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

fadeInTargets.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) observer2.observe(el);
});

// Ages announcement appear animation
const agesAnnouncement = document.querySelector('.ages-announcement');
if (agesAnnouncement) {
    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('appear', entry.isIntersecting);
        });
    }, {
        threshold: 0.5,
        rootMargin: "-30% 0px -10% 0px"
    });
    observer3.observe(agesAnnouncement);
}

// Card appear animation
const backCard = document.querySelector('#back-card');
const frontCard = document.querySelector('#front-card');
if (backCard && frontCard) {
    const observer4 = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer4.observe(backCard);
    observer4.observe(frontCard);
}

// Timeline item click logic
const timelineItems = document.querySelectorAll('.timeline-content-wrapper li');
timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        const detail = item.querySelector('.timeline-desc');
        if (detail) detail.classList.toggle('open');
        const circle = item.querySelector('.circle');
        const verticalLine = item.querySelector('.line-vertical');
        if (circle) circle.classList.toggle('selected');
        if (verticalLine) verticalLine.classList.toggle('selected');
    });
});

// Ensure last timeline item is open/selected
if (timelineItems.length) {
    const lastItem = timelineItems[timelineItems.length - 1];
    if (lastItem) {
        const detail = lastItem.querySelector('.timeline-desc');
        const circle = lastItem.querySelector('.circle');
        const verticalLine = lastItem.querySelector('.line-vertical');
        if (detail) detail.classList.add('open');
        if (circle) circle.classList.add('selected');
        if (verticalLine) verticalLine.classList.add('selected');
    }
}

// Modal overlay logic
const modalButtons = document.querySelectorAll('.modal-coming-soon button');
modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector('.modal-overlay');
        if (modal) modal.style.display = 'none';
    });
});

// Sort button modal
const sortButton = document.querySelector('.sort-button');
if (sortButton) {
    sortButton.addEventListener('click', () => {
        const modal = document.querySelector('.modal-overlay');
        if (modal) modal.style.display = 'flex';
    });
}

// Show more nobles modal
const showMoreButton = document.querySelector('.show-more-nobles button');
if (showMoreButton) {
    showMoreButton.addEventListener('click', () => {
        const modal = document.querySelector('.modal-overlay');
        if (modal) modal.style.display = 'flex';
    });
}

// Emperor Description Pages
const pages = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet risus vel velit cursus commodo. Sed gravida, erat nec facilisis volutpat, ipsum augue iaculis nisi, at semper eros nulla sit amet dolor. Curabitur sagittis turpis a sem cursus, id vulputate sem placerat.`,
    `Praesent feugiat, massa non euismod accumsan, augue mi fringilla sem, vel aliquet lacus tortor in urna. Sed convallis, erat nec sollicitudin porta, dolor est pulvinar lorem, in ultrices sem metus at libero. Cras suscipit risus quis arcu ullamcorper aliquet.`,
    `Morbi ultricies, libero ut blandit eleifend, neque leo bibendum felis, eu vulputate elit lorem ac sapien. Donec vestibulum erat a turpis ultricies, quis fermentum nisl vehicula. Nulla facilisi. Integer lacinia, elit id feugiat ultricies, ante arcu vehicula sapien, vitae ultrices nunc erat at orci.`,
    `Donec sed mi euismod, gravida metus id, semper sapien. Maecenas luctus ligula vel arcu finibus semper. Sed ut ligula vitae lorem iaculis tincidunt. In hac habitasse platea dictumst. Vivamus ornare venenatis lorem at feugiat. Curabitur commodo auctor leo.`,
    `Suspendisse malesuada pulvinar massa. Aliquam erat volutpat. Sed eu maximus lectus. Duis nec ipsum eget nunc semper congue. Maecenas vulputate leo lacus, ut ornare ante viverra et. Vivamus id leo vitae felis tempor vulputate quis sed ex.`
];

let currentPage = 0;

const descContainer = document.getElementById('desc-container');
const pageIndicator = document.getElementById('page-indicator');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function renderPage() {
    descContainer.innerHTML = `<p>${pages[currentPage]}</p>`;
    pageIndicator.textContent = `${currentPage + 1}/${pages.length}`;
    prevBtn.style.display = currentPage === 0 ? 'none' : 'flex';
    nextBtn.style.display = currentPage === pages.length - 1 ? 'none' : 'flex';
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        renderPage();
    }
});

renderPage();

// Data dummy tiap era
const noblesData = {
    "the-wild-world-era": {
        description: `
      Era ini adalah awal mula kekuasaan besar. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Alias dignissimos odit architecto numquam illum similique reprehenderit maiores.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sequi?
    `,
        nobles: [
            { name: "Arkanos the Wild", img: "assets/contents/noble-king.png" },
            { name: "Lady Ferina", img: "assets/contents/noble-king.png" },
            { name: "General Balt", img: "assets/contents/noble-king.png" }
        ]
    },
    "the-first-mother-era": {
        description: `
      Pada masa ini, para ibu agung memimpin peradaban. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, iste.
    `,
        nobles: [
            { name: "Mother Sylvara", img: "assets/contents/noble-king.png" },
            { name: "Elder Numea", img: "assets/contents/noble-king.png" }
        ]
    },
    "the-black-boss-era": {
        description: `
      Kekuasaan gelap merajai. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Corporis omnis facilis repellat commodi ad dignissimos.
    `,
        nobles: [
            { name: "Lord Umbrax", img: "assets/contents/noble-king.png" },
            { name: "Duke Renvar", img: "assets/contents/noble-king.png" },
            { name: "Mistress Vharra", img: "assets/contents/noble-king.png" },
            { name: "Captain Xeros", img: "assets/contents/noble-king.png" }
        ]
    },
    "the-pandemic-era": {
        description: `
      Bencana besar menyebar ke seluruh negeri. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, neque.
    `,
        nobles: [
            { name: "Healer Orion", img: "assets/contents/noble-king.png" }
        ]
    },
    "the-open-source-era": {
        description: `
      Semua orang memiliki kekuatan yang setara. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eum?
    `,
        nobles: [
            { name: "Chancellor Freon", img: "assets/contents/noble-king.png" },
            { name: "Archivist Vela", img: "assets/contents/noble-king.png" }
        ]
    }
};

// Dropdown logic + populate konten
const dropdown = document.getElementById('dropdown');
if (dropdown) {
    const selected = dropdown.querySelector('.selected');
    const hiddenInput = dropdown.querySelector('input');
    const list = dropdown.querySelector('.dropdown-list');
    const descWrapper = document.querySelector('.nobles-description');
    const noblesWrapper = document.querySelector('.nobles-pictures .second-line');

    dropdown.addEventListener('click', (e) => {
        // biar gak langsung nutup saat klik item
        if (e.target.tagName !== 'LI') {
            list.style.display = list.style.display === 'block' ? 'none' : 'block';
        }
    });

    if (list) {
        list.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                const value = item.dataset.value;
                const eraData = noblesData[value];

                if (selected) selected.textContent = item.textContent;
                if (hiddenInput) hiddenInput.value = value;

                if (descWrapper) {
                    descWrapper.innerHTML = `<p>${eraData.description}</p>`;
                }

                if (noblesWrapper) {
                    noblesWrapper.innerHTML = "";
                    eraData.nobles.forEach(noble => {
                        noblesWrapper.innerHTML += `
                <figure>
                    <img src="${noble.img}" alt="noble">
                    <figcaption>${noble.name}</figcaption>
                </figure>
            `;
                    });
                }

                // Tutup dropdown list
                list.style.display = 'none';
            });
        });
    }
}

// List ramalan
const predictions = [
    "Hari ini kamu hampir kaya, tapi batal karena lupa mandi.",
    "Dompetmu akan gemuk... kalau kamu isi sendiri.",
    "Keberuntunganmu sedang loading, harap bersabar.",
    "Semesta mendukungmu, tapi kuotanya tinggal dikit.",
    "Kucing tetangga sedang merencanakan sesuatu tentangmu.",
    "Mantanmu tiba-tiba ingat kamu... terus lupa lagi.",
    "Peluang besar datang, tapi kamu masih rebahan.",
    "Dompetmu memberi kode keras: isi aku, bang.",
    "Malam ini kamu akan ketawa gara-gara hal receh.",
    "Kamu akan menemukan solusi... setelah makan."
];

// List quote
const quotes = [
    "Luck is when Wi-Fi connects in one try.",
    "Good things come to those who nap.",
    "If it's meant to be, it will DM you first.",
    "The universe sees your effort… lalu ngantuk.",
    "Some days you win, some days you ngelawak.",
    "Don't chase luck. Chat dulu.",
    "Your vibe attracts debts and snacks.",
    "Let it flow, tapi jangan boncengan duit orang.",
    "Believe in yourself, internet belum tentu.",
    "Life is short, tapi cicilan panjang."
];
const luckBtn = document.querySelector('.philosophy-generate button');
const tarotCards = document.querySelectorAll('#front-card, #back-card');
const predictionBox = document.querySelector('.philosophy-prediction p');
const quoteBox = document.querySelector('.philosophy-quote p');

luckBtn.addEventListener('click', () => {
    tarotCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
        card.classList.remove('appear');
        card.classList.remove('spin-card');
        void card.offsetWidth;
        card.classList.add('spin-card');
    });

    setTimeout(() => {
        tarotCards.forEach(card => {
            card.classList.remove('spin-card');
            card.classList.add('appear');
        });

        const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        predictionBox.textContent = randomPrediction;
        quoteBox.textContent = randomQuote;
    }, 1000);
});


