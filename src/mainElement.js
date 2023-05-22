import { newElement, newElementsCollection } from "../Alone/element/Elements.mjs";



export default function mainElement() {
    return newElementsCollection({
        elements:[
            newElement({
                message:"Welcome to Alone JS",
            },"h1"),
        ],
    });
}