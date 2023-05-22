export function newElement(message="",type="span"){
    const element = document.createElement(type);
    element.append(message);
    return element;
}



export function newElementsCollection(elements=[],type="div"){
    if(typeof elements !==  "object") throw Error("newElementCollection only support array of elements");
    const collectionElement = document.createElement(type);
    elements.forEach(newElement => {
        collectionElement.append(newElement);
    });
    return collectionElement;
}