import getAttrNameFromSelector from "./getAttrNameFromSelector";

const getParams = (element: Element, dataAttrSelector: string) => {
    return JSON.parse(
        element.getAttribute(
            getAttrNameFromSelector(dataAttrSelector)
        )
    )
}

export default getParams;
