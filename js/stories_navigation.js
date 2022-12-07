const [navLeft, navRight] = document.querySelectorAll("button.stories-nav");
const storiesSlide = document.querySelector("div.stories-slide");
const storiesSlideScrollWidth = storiesSlide.getBoundingClientRect()["width"];
const scrollSprain = 330;

function getScrollLimit() {
    return storiesSlide.scrollWidth - storiesSlide.offsetWidth;
}

function showAndHideArrows() {
    if (storiesSlide.scrollWidth <= storiesSlideScrollWidth) return;
    navLeft.style.display = 'none';
    navRight.style.display = 'none';

    if (storiesSlide.scrollLeft < getScrollLimit()) {
        navRight.style.display = 'grid';
    }

    if (storiesSlide.scrollLeft > 0) {
        navLeft.style.display = 'grid';
    }
}

export const addStoryNavigationEvents = () => {
    // Initializing
    showAndHideArrows();

    // Scroll Events
    storiesSlide.onscroll = showAndHideArrows;

    // Nav Events
    navLeft.onclick = () => storiesSlide.scroll({ left: storiesSlide.scrollLeft - scrollSprain, behavior: "smooth" });
    navRight.onclick = () => storiesSlide.scroll({ left: storiesSlide.scrollLeft + scrollSprain, behavior: "smooth" });
};