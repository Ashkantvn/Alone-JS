import {newElement, newElementsCollection} from "../Alone/element/Elements.mjs";
export default function mainElement(){
    return newElementsCollection(
        [
            newElement("Welcome to Alone JS","h1"),
            newElement("A library which helps to create front-end with only javaScript","p")
        ]
    );
}