import {URL_DOMAIN, URL_LOCALHOST} from "../common/constants";

export const createWidget = (topicId,widget) => {
    return fetch(`${URL_LOCALHOST}/api/topics/${topicId}/widgets`,{
        method:'POST',
        body: JSON.stringify(
            {
                title: "New Widget"
            }),
        headers:{
            'content-Type':'application/json'
        }
    }).then(response => response.json())
}

export const deleteWidget = (widgetId) =>
    fetch(`${URL_LOCALHOST}/api/widgets/${widgetId}`,
        { method: "DELETE"
        }).then(response => response.json())

export const findWidgetsForTopic = (topicId) => {
    return fetch(`${URL_LOCALHOST}/api/topics/${topicId}/widgets`)
        .then(response => response.json())
}

export const updateWidget = (widgetId,widget) => {
    return fetch(`${URL_LOCALHOST}/api/widgets/${widgetId}`,{
        method:'PUT',
        body: JSON.stringify(widget),
        headers:{
            'content-Type':'application/json'
        }
    }).then(response => response.json())
}

export const upWidget = (widgetId) => {
    return fetch(`${URL_DOMAIN}/api/widgets/up-widget/${widgetId}`)
        .then(response => response.json())
}

export const downWidget = (widgetId) => {
    return fetch(`${URL_DOMAIN}/api/widgets/down-widget/${widgetId}`)
        .then(response => response.json())
}


export default {createWidget, deleteWidget,findWidgetsForTopic, updateWidget, upWidget, downWidget}