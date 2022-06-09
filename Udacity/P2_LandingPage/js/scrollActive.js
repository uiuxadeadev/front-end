export function scrollActive() {
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