function addHtmlLineBreaks(textContent) {
    if (!textContent) return "";
    return textContent.replaceAll(/\r\n|\n\r|\n|\r/g, "<br />");
}

export const formatCaptionElements = () => {
    const captionElements = document.querySelectorAll("section.caption>span.profile-caption");
    captionElements.forEach(userCaption => {
        if (!userCaption) return;
        userCaption.innerHTML = addHtmlLineBreaks(userCaption.textContent);
    });
};