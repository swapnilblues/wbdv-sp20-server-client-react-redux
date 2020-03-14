import {URL_DOMAIN, URL_LOCALHOST} from "../common/constants";

export const createTopic  = (lessonId, topic) =>
    fetch(`${URL_DOMAIN}/api/lessons/${lessonId}/topics`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${URL_DOMAIN}/api/lessons/${lessonId}/topics`)
        .then(response =>
            // console.log(response.json())
            response.json())

export const deleteTopic = (topicId) =>
    fetch(`${URL_DOMAIN}/api/topics/${topicId}`,
        { method: "DELETE"
        }).then(response => response.json())

export const updateTopic  = async (newTopic, topicId) => {
    const response = await fetch(`${URL_DOMAIN}/api/topics/${topicId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newTopic)
    })
    return await response.json()
}


export default {createTopic, findTopicsForLesson, deleteTopic, updateTopic}