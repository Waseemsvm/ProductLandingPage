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
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * @description check if the given HTMLElement is in the view port
 * @param {HTMLElement} element
 */

function isInViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (
        // rect.top >= 0 && rect.left >= 0 && rect.right <= window.innerWidth && rect.bottom <= window.innerHeight
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
    sectionsInViewPort[0]?.classList.add('active');
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

generateNavContent();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click











