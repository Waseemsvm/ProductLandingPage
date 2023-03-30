# LandingPage

The LandingPage project that demonstrates efficient use of **dom manipulation**.
**Dynamic insertion** of navigation items depending on the sections inserted.
Shows the use of append, appendChild, innerHtml, scrollTo... properties, methods...

## Comments

Comments document the functions, the parameters they accept, their types and return type.

## Architecture

The styles, controllers, and views are separated from each other depending on the actions they perform.

## Navigation

On first load Navbar is displayed. On scroll navbar is hidden and when scrolling is stopped navbar becomes visible.
In mobile view navbar converted to hamburger menu.
On click of each of the links in the navbar dom is scrolled to that particular section.

### Scroll to top

Initially the scroll to top button is hidden.
On scrolling below the scroll to top button is activated.
Clicking the scroll to top button scrolls the page to the top.

## Sections

On scrolling the page, depending on which section is near to the top, that particular section is set active.

## Footer
