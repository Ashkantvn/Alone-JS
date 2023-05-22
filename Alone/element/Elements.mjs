export function newElement({ message = "", style = "" }, tagName = "span") {
    const element = document.createElement(tagName);
    if (message) element.append(message);
    if (style) element.style.cssText = style;
    return element;
}



export function newElementsCollection({ elements = [], collectionStyle = "" }, tagName = "div") {
    if(typeof elements !== "object") throw Error("newElementCollection only support array");
    const collectionElement = document.createElement(tagName);
    if (elements) {
        elements.forEach(newElement => {
            collectionElement.append(newElement);
        });
    }
    if (collectionElement) collectionElement.style.cssText = collectionElement;
    return collectionElement;
}