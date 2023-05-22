import {newElement, newElementsCollection} from "../Alone/element/Elements.mjs";
export default function mainElement(){
    return newElementsCollection(
        [
            newElementsCollection([
                newElement("Welcome to Alone "),
                newElement("JS")
            ],"h1"),
            newElement("A library which helps to create front-end with only javaScript","p")
        ]
    );
}