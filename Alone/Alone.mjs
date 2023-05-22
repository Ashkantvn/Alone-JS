export default class Alone {
    constructor(mainElementType) {
        this.mainElementType = mainElementType;
    }
    creator(elementContent) {
        if (typeof this.mainElementType !== "string" || !this.mainElementType) throw Error("Please set the type of main element to run creator method");
        if (!elementContent) throw Error("Please set the main content to run creator method");
        const mainElement = document.createElement(this.mainElementType);
        mainElement.append(elementContent);
        document.body.append(mainElement);
    }
}