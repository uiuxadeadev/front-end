/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */


/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build menu
window.onload = createNavbar;

function createNavbar() {
    ////hold the ul in a variable
    const navList = document.getElementById("navbar__list");
    const sections = Array.from(document.getElementsByTagName("section"));
    ////Create each list item li along with its attributes
    for (const section of sections) {
        let li = document.createElement("li");
        li.classList.add("menu__link");
        li.setAttribute("id", section.id);
        li.innerHTML += `<a class="list__item" data=${section.id} href="#${section.id}">${section.dataset.nav}</a>`
        navList.appendChild(li);
    }

    const navbar = document.querySelector(".navbar__menu");
    let hamburgerMenu = document.createElement("div");
    hamburgerMenu.setAttribute("class", "hamburger");
    hamburgerMenu.innerHTML = `<a href="javascript:void(0);" class=""><i class="fa fa-bars"></i></a>`
    navbar.appendChild(hamburgerMenu);

    ///////SmartPhone menu add active
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("#navbar__list");

    hamburger.addEventListener("click", function(e) {
        e.preventDefault();
        hamburger.classList.toggle("hamburger_active");
        navMenu.classList.toggle("hamburger_active");
    });

    const list__item = document.querySelectorAll(".list__item");

    list__item.forEach(n => n.addEventListener("click", function(e) {
        e.preventDefault();
        hamburger.classList.remove("hamburger_active");
        navMenu.classList.remove("hamburger_active");
    }));

    ///////Section transition by click a nav list
    // Get all nav menu with class="list-item"
    const listItems = document.getElementsByClassName("menu__link");
    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", function(e) {
            e.preventDefault();
            // we need to remove "active" from all lists
            for (item of listItems[i].parentElement.children) {
                item.classList.remove("active");
            }
            // Add class 'active' to section when near top of viewport
            this.classList.add("active");

            // Scroll to section on link click
            // Judge by id clicked
            for (let section of sections) {
                if (this.id === section.id) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    });
                }
            }
        });
    }
}
/**
 * End Main Functions
 * Begin Events
 *
 */


//Set sections as active

///////active action change by scroll
window.addEventListener('scroll', function() {
    scrollActive();
});

function scrollActive() {
    //e.preventDefault();
    const sections = Array.from(document.getElementsByTagName('section'));
    for (const section of sections) {
        const sectionRect = section.getBoundingClientRect();
        //const position = sectionRect.top ;
        // You can play with the values in the "if" condition to further make it more accurate.
        if (sectionRect.top <= 150 && sectionRect.bottom >= 150) {
            //if (position <= window.innerHeight/2) {
            // Apply active state on the current section and the corresponding Nav link.
            document.querySelector(`[data=${section.id}]`).parentElement.classList.add("active");
            section.classList.add("your-active-class");
        } else {
            // Remove active state from other section and corresponding Nav link.
            document.querySelector(`[data=${section.id}]`).parentElement.classList.remove("active");
            section.classList.remove("your-active-class");
        }
    }
}