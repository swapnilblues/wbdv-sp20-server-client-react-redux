export const createTopic  = (lessonId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/lessons/${lessonId}/topics`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/lessons/${lessonId}/topics`)
        .then(response =>
            // console.log(response.json())
            response.json())

export default {createTopic, findTopicsForLesson}