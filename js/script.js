/* ==========================================
   HEADER SCROLL EFFECT
========================================== */

const header =
document.querySelector(
    "header"
);

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            header.style.background =
            "rgba(7,11,20,0.92)";

            header.style.backdropFilter =
            "blur(20px)";

            header.style.boxShadow =
            "0 5px 30px rgba(0,0,0,0.25)";

        }

        else {

            header.style.background =
            "rgba(7,11,20,0.75)";

            header.style.boxShadow =
            "none";

        }

    }
);


/* ==========================================
   PREMIUM REVEAL ANIMATION
========================================== */

const revealElements =
document.querySelectorAll(
`
.hero,
.preview-section,
.contact-section,
.project-card,
.preview-card,
.stat-card,
.event-card,
.timeline-item,
.contact-info,
.contact-form-card
`
);

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(
            entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show-element"
                    );

                }

            }
        );

    },

    {
        threshold:0.15
    }

);

revealElements.forEach(
    (
        element,
        index
    ) => {

        element.style.transitionDelay =
        `${index * 0.08}s`;

        observer.observe(
            element
        );

    }
);


/* ==========================================
   PROJECT CARD 3D TILT
========================================== */

const cards =
document.querySelectorAll(
    ".project-card"
);

cards.forEach(
    card => {

        card.addEventListener(
            "mousemove",
            e => {

                const rect =
                card.getBoundingClientRect();

                const x =
                e.clientX -
                rect.left;

                const y =
                e.clientY -
                rect.top;

                const centerX =
                rect.width / 2;

                const centerY =
                rect.height / 2;

                const rotateX =
                (
                    (
                        y -
                        centerY
                    ) / 18
                ) * -1;

                const rotateY =
                (
                    x -
                    centerX
                ) / 18;

                card.style.transform =
                `
                perspective(1200px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-12px)
                scale(1.02)
                `;

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                `
                perspective(1200px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0px)
                scale(1)
                `;

            }
        );

    }
);


/* ==========================================
   CURSOR GLOW EFFECT
========================================== */

const glow =
document.createElement(
    "div"
);

glow.className =
"cursor-glow";

document.body.appendChild(
    glow
);

document.addEventListener(
    "mousemove",
    e => {

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";

    }
);

/* ==========================================
   HERO PARALLAX EFFECT
========================================== */

const heroCard =
document.querySelector(
    ".profile-card"
);

document.addEventListener(
    "mousemove",
    e => {

        if (
            !heroCard
        ) return;

        const x =
        (
            window.innerWidth / 2
            - e.clientX
        ) / 40;

        const y =
        (
            window.innerHeight / 2
            - e.clientY
        ) / 40;

        heroCard.style.transform =
        `
        translate(${x}px,${y}px)
        `;

    }
);


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar =
document.createElement(
    "div"
);

progressBar.className =
"scroll-progress";

document.body.appendChild(
    progressBar
);

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
        document.documentElement.scrollTop;

        const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const progress =
        (
            scrollTop /
            height
        ) * 100;

        progressBar.style.width =
        `${progress}%`;

    }
);


/* ==========================================
   HERO LOAD ANIMATION
========================================== */

window.addEventListener(
    "load",
    () => {

        const heroText =
        document.querySelector(
            ".hero-left"
        );

        if (
            heroText
        ) {

            heroText.animate(

                [

                    {
                        opacity:0,
                        transform:
                        "translateY(60px)"
                    },

                    {
                        opacity:1,
                        transform:
                        "translateY(0)"
                    }

                ],

                {
                    duration:1200,
                    easing:
                    "ease-out"
                }

            );

        }

    }
);


/* ==========================================
   THEME TOGGLE
========================================== */

const themeToggle =
document.getElementById(
    "themeToggle"
);

/* Apply saved theme */

const savedTheme =
localStorage.getItem(
    "theme"
);

if(savedTheme === "light"){

    document.body.classList.add(
        "light-theme"
    );

    themeToggle.textContent =
    "☀️";

}
else{

    document.body.classList.remove(
        "light-theme"
    );

    themeToggle.textContent =
    "🌙";
}

/* Change theme ONLY on click */

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-theme"
        );

        if(
            document.body.classList.contains(
                "light-theme"
            )
        ){

            themeToggle.textContent =
            "☀️";

            localStorage.setItem(
                "theme",
                "light"
            );

        }
        else{

            themeToggle.textContent =
            "🌙";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    }
);