const selected = "selected";

function changeSvg(navItem, isFilled = false) {
    if (!navItem) return;
    const svgImages = Array.from(navItem.firstElementChild.children);
    svgImages.forEach((svg) => {
        if (svg.tagName != "svg") return;
        svg.style.display = "none";
        const attributChecked = (isFilled) ? "filled" : "outlined";
        if (svg.hasAttribute(attributChecked)) {
            svg.style.display = "block";
        }
    });
}

function addSelected(navItem) {
    if (!navItem) return;
    navItem.classList.add(selected);
    changeSvg(navItem, true);
}

function unselectAll(navItems) {
    if (!navItems) return;
    navItems.forEach((navItem) => {
        navItem.classList.remove(selected);
        changeSvg(navItem, false);
    });
}

export const addNavItemsClickEvent = () => {
    const navItems = document.querySelectorAll(".nav-item");

    if (!navItems) return;
    navItems.forEach((navItem) => {
        navItem.addEventListener("click", (event) => {
            event.preventDefault();
            unselectAll(navItems);
            addSelected(navItem);
        });
    });
};