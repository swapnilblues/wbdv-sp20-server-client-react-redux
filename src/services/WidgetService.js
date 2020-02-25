import {URL_DOMAIN} from "../common/constants";

export const createWidget = (widgetId,widget) => {
    // console.log(widget)
    return fetch(`${URL_DOMAIN}/api/topics/${widgetId}/widgets`,{
        method:'POST',
        body: JSON.stringify(
            {
                id: (new Date()).getTime() + "",
                title: "New Widget"
            }),
        headers:{
            'content-Type':'application/json'
        }
    }).then(response => response.json())
}

export const deleteWidget = (widgetId) =>
    fetch(`${URL_DOMAIN}/api/widgets/${widgetId}`,
        { method: "DELETE"
        }).then(response => response.json())

export const findWidgetsForTopic = (topicId) => {
    return fetch(`${URL_DOMAIN}/api/topics/${topicId}/widgets`)
        .then(response => response.json())
}

export const updateWidget = (widgetId,widget) => {
    return fetch(`${URL_DOMAIN}/api/topics/${widgetId}/widgets`,{
        method:'PUT',
        body: JSON.stringify(widget),
        headers:{
            'content-Type':'application/json'
        }
    }).then(response => response.json())
}


export default {createWidget, deleteWidget,findWidgetsForTopic, updateWidget}