export default class Alone {
    constructor(mainElementType) {
        this.mainElementType = mainElementType;
    }
    creator(elementContent) {
        if (typeof this.mainElementType !== "string" || !this.mainElementType) return console.error("Please set the type of main element to run creator method");
        if (!elementContent) return console.error("Please set the main content to run creator method");
        const mainElement = document.createElement(this.mainElementType);
        mainElement.append(elementContent);
        document.body.append(mainElement);
    }
}