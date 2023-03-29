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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


/**
 * Define Global Variables
 *
*/

/**
 * @type {HTMLElement[]} - navbar of the document
 */
let navbar = document.querySelector(".navbar__list");

/**
 * @type {Function} 
 * @description used to store the timeout for navbar on scroll hide
 */
let timer = null

/**
 * @type {HTMLElement[]} - ilst of all the sections in the main 
 */

let aSections = document.querySelectorAll('main section');

/**
 * @type {HTMLElement} - ul created
 */

let myList = document.createElement("ul");

/**
 * @type {HTMLElement} - navbar list in the DOM.
 */
let list = document.querySelector("#navbar__list");

/**
 * @type { HTMLElement } - scroll to top button 
 */

let scrollTopBtn = document.querySelector(".scrollToTop");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * function that handles visibility of the navbar on scroll
 */
function handleNavBarVisibility() {
    navbar.classList.remove("hide")
}

/**
 * @description handles Scroll to top funcationality
 */

function backToTop() {
    document.documentElement.scrollIntoView({ behavior: "smooth" })
}


/**
 * @description handles the visibility of scrollToTop button
 */
function handleScrollToTopBtn() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.classList.add("showScrollToTop");
    } else {
        scrollTopBtn.classList.remove("showScrollToTop");
    }
}


/**
 * @description check if the given HTMLElement is in the view port
 * @param {HTMLElement} element
 */

function isInViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.top <= window.innerHeight
    )
}


/**
 * @description generates a nav content as per the sections and append to the navlist
 */
function generateNavContent() {
    aSections.forEach(section => {
        let listitem = document.createElement("li")
        let link = document.createElement("a");
        link.href = "#" + section.id

        // Scroll to anchor ID using scrollTO event
        // Scroll to section on link click
        link.onclick = oEvent => {
            oEvent.preventDefault();
            section.scrollIntoView({ behavior: "smooth" });
        }
        link.classList.add("menu__link");
        link.innerHTML = section.dataset.nav;
        listitem.appendChild(link);
        myList.appendChild(listitem)
    })

    list.append(...myList.childNodes)
}


// Set sections as active

document.onscroll = function (e) {
    let sectionsInViewPort = [];
    aSections.forEach(section => {
        section.classList.remove('active')
        if (isInViewPort(section)) sectionsInViewPort.push(section);
    })

    // Add class 'active' to section when near top of viewport
    sectionsInViewPort[0]?.classList.add('active');

    handleScrollToTopBtn();

    navbar.classList.add("hide")


    if (timer != null) {
        clearTimeout(timer)
    }
    timer = setTimeout(handleNavBarVisibility, 500)


}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
// Build menu
generateNavContent();

/**
 * End Main Functions
 * Begin Events
 *
*/

















