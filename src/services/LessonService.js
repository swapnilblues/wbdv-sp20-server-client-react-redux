export const createLesson  = (moduleId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/modules/${moduleId}/lessons`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    }).then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/modules/${moduleId}/lessons`)
        .then(response =>
            // console.log(response.json())
            response.json())

export default {createLesson, findLessonsForModule}