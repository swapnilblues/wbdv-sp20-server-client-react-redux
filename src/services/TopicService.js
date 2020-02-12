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

export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/topics/${topicId}`,
        { method: "DELETE"
        }).then(response => response.json())

export const updateTopic  = async (newLesson, lessonId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/lessons/${lessonId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newLesson)
    })
    return await response.json()
}


export default {createTopic, findTopicsForLesson, deleteTopic, updateTopic}